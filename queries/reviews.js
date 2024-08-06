const db = require("../db/dbConfig.js");

// Function to get all reviews by short_id
const getAllReviews = async (short_id) => {
  try {
    const allReviews = await db.any(
      "SELECT * FROM reviews WHERE short_id=$1",
      short_id
    );
    return allReviews;
  } catch (error) {
    return error;
  }
};

// Function to get a single review by id
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// Function to create a new review
const newReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, title, content, short_id, is_liked) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.short_id,
        review.is_liked,
      ]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

// Function to delete a review by id
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

// Function to update a review
const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, title=$2, content=$3, short_id=$4, is_liked=$5 WHERE id=$6 RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.short_id,
        review.is_liked,
        review.id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
};
