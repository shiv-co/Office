import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import newsRoutes from "./Routes/newsRoutes.js";
import chatbotRoutes from "./Routes/chatbot.js";


console.log("Cloudinary Config:", process.env.CLOUDINARY_CLOUD_NAME);



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", chatbotRoutes);

// Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
