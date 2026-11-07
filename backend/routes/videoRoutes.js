const express = require("express");
const Video = require("../models/Video");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public: Get published videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.find({ status: "Published" })
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch videos",
    });
  }
});

// Admin: Create video
router.post("/", authMiddleware, async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create video",
      error: error.message,
    });
  }
});

// Admin: Update video
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.json(video);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update video",
      error: error.message,
    });
  }
});

// Admin: Delete video
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);

    if (!video) {
      return res.status(404).json({
        message: "Video not found",
      });
    }

    res.json({
      message: "Video deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete video",
    });
  }
});

module.exports = router;
