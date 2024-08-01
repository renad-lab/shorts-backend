const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
} = require("../queries/authors");

// Get all authors
router.get("/", async (req, res) => {
  try {
    const authorsList = await getAllAuthors();
    res.status(200).json(authorsList);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get a specific author
router.get("/:id", async (req, res) => {
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
router.post("/", async (req, res) => {
  try {
    const author = await createAuthor(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an author
router.delete("/:id", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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

module.exports = router;
