const express = require("express");
const writers = express.Router();

const shortsController = require("./shortsController");
writers.use("/:writer_id/shorts", shortsController);

const {
  getAllWriters,
  getWriter,
  createWriter,
  deleteWriter,
  updateWriter,
} = require("../queries/writers");
const { getAllShorts } = require("../queries/shorts");

// Get all writers
//localhost:4001/writers/
writers.get("/", async (req, res) => {
  try {
    const writersList = await getAllWriters();
    res.status(200).json(writersList);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

writers.get("/allshorts", async (req, res) => {
  try {
    const allShorts = await getAllShorts();
    res.status(200).json(allShorts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Get a specific writer

writers.get("/allshorts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const writer = await getWriter(id);
    if (writer) {
      const writerShorts = await getAllShortsByWriterId(id);
      res.status(200).json(writerShorts);
    } else {
      res.status(404).json({ error: "Writer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

writers.get("/allshorts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const writer = await getWriter(id);
    if (writer) {
      const writerShorts = await getAllShortsByWriterId(id);
      res.status(200).json(writerShorts);
    } else {
      res.status(404).json({ error: "Writer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

writers.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const writer = await getWriter(id);
    if (writer) {
      res.status(200).json(writer);
    } else {
      res.status(404).json({ error: "Writer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Create a new writer
writers.post("/", async (req, res) => {
  try {
    const writer = await createWriter(req.body);
    res.status(201).json(writer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a writer
writers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWriter = await deleteWriter(id);
    if (deletedWriter) {
      res.status(200).json(deletedWriter);
    } else {
      res.status(404).json({ error: "Writer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Update a writer
writers.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedWriter = await updateWriter(id, req.body);
    if (updatedWriter) {
      res.status(200).json(updatedWriter);
    } else {
      res.status(404).json({ error: "Writer not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = writers;
