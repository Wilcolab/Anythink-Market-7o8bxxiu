const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// GET /api/comments - return all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json({ comments });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// GET /api/comments/pull-request - placeholder for pull request logic
router.get("/pull-request", (req, res) => {
  res.json({ message: "Pull request endpoint placeholder" });
});

module.exports = router;
