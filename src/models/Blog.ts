import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      default: "",
    },
    metaKeywords: {
      type: [String],
      default: [],
    },
    metaTitle: {
      type: String,
      default: "",
    },
    pageURL: {
      type: String,
      default: "",
      unique: true,
      required: true,
      index: true, // Explicit index for faster queries
    },
    thumbnail: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Active", "Draft", "Delete"],
      default: "Draft",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
