// Dependencies
const express = require("express");

const reviews = express.Router({ mergeParams: true });

const { getShort } = require("../queries/shorts");

// Queries
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// INDEX
// localhost:4001/shorts/1/reviews/
reviews.get("/", async (req, res) => {
  const { short_id } = req.params;
  const reviews = await getAllReviews(short_id);
  const short = await getShort(short_id);

  if (short.id) {
    res.status(200).json({ ...short, reviews });
  } else {
    res.status(500).json({ error: "Short not found or server error" });
  }
});

// SHOW
// localhost:4001/shorts/2/reviews/2
reviews.get("/:id", async (req, res) => {
  const { short_id, id } = req.params;
  const review = await getReview(id);
  const short = await getShort(short_id);

  if (review) {
    res.json({ ...short, review });
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
// localhost:4001/shorts/2/reviews/10
reviews.put("/:id", async (req, res) => {
  const { id, short_id } = req.params;
  const updatedReview = await updateReview({ short_id, id, ...req.body });
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

// CREATE
// localhost:4001/shorts/1/reviews/
reviews.post("/", async (req, res) => {
  const { short_id } = req.params;
  const review = await newReview({ ...req.body, short_id });
  res.status(200).json(review);
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer": "Lou",
//     "title": "Fryin Better",
//     "content": "With the great tips and tricks I found here",
//     "short_id": "2",
//     "rating": "4"
// }
module.exports = reviews;
