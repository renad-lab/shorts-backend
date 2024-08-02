const express = require("express");
const authors = express.Router();

const shortsController = require("./shortsController");
authors.use("/:author_id/shorts", shortsController);

const {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} = require("../queries/authors");
const { getAllShorts } = require("../queries/shorts");

// Get all authors
authors.get("/", async (req, res) => {
  try {
    const authorsList = await getAllAuthors();
    res.status(200).json(authorsList);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

authors.get("/allshorts", async (req, res) => {
  try {
    const allShorts = await getAllShorts();
    res.status(200).json(allShorts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
// Get a specific author
authors.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const author = await getAuthor(id);
    if (author) {
      res.status(200).json(author);
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new author
authors.post("/", async (req, res) => {
  try {
    const author = await createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an author
authors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAuthor = await deleteAuthor(id);
    if (deletedAuthor) {
      res.status(200).json(deletedAuthor);
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update an author
authors.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAuthor = await updateAuthor(id, req.body);
    if (updatedAuthor) {
      res.status(200).json(updatedAuthor);
    } else {
      res.status(404).json({ error: "Author not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = authors;
