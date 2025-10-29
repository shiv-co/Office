// import mongoose from "mongoose";

// const newsSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   date: { type: String, required: true },
//   description: { type: String, required :true}, 
//   image: { type: String, required: true },
// },
// { timestamps: true },);

// const News = mongoose.model("News", newsSchema);
// export default News;


import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema);
export default News;
