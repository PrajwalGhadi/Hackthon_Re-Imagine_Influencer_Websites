const postModel = require("../models/post.model");

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching posts", error });
  }
};

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new postModel({ title, content });
    await newPost.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Post created successfully",
        post: newPost,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating post", error });
  }
};

module.exports = {
  getPosts,
  createPost,
};
