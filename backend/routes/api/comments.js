const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

module.exports = router;
