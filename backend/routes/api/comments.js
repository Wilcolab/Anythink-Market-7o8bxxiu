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

// DELETE /api/comments/:id - delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Comment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

module.exports = router;
