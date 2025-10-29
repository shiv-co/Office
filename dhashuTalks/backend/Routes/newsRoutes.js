import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import News from "../models/News.js"; // Corrected relative path

const router = express.Router();

console.log("Cloudinary inside route:", cloudinary.config());

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "news_images",
    allowedFormats: ["jpg", "png", "jpeg"],
    transformation: [{ width: 800, height: 600, crop: "limit" }],
  },
});

const upload = multer({ storage });




router.post("/", async (req, res) => {
  try {
    const { title, date, description,  image } = req.body;

    if (!title || !date || !description  || !image?.url || !image?.public_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newNews = new News({
      title,
      date,
      description,
      image: {
        url: image.url,
        public_id: image.public_id,
      },
    });

    await newNews.save();
    res.status(201).json({ message: "News created successfully", news: newNews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find().sort({ _id: -1 }); // latest first
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Error fetching news" });
  }
});

// PUT (Update) news
router.put("/:id", async (req, res) => {
  try {
    const updated = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating news" });
  }
});

// DELETE news
router.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting news" });
  }
});

export default router;
  