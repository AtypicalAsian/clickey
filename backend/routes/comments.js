const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

//Create new comment
router.post("/create", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    // console.log(req.body)
    const savedComment = await newComment.save();

    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update existing comments
router.put("/:id", async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete existing comment
router.delete("/:id", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Comment!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all post comments
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
