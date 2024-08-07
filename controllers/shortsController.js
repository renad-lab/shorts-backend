const express = require("express");
const shorts = express.Router({ mergeParams: true });

const { getWriter } = require("../queries/writers.js");

const reviewsController = require("./reviewsController");

shorts.use("/:short_id/reviews", reviewsController);

// Queries
const {
  getAllShorts,
  getShort,
  createShort,
  deleteShort,
  updateShort,
  getShortsByWriterID,
} = require("../queries/shorts");

// Validations
const {
  checkBoolean,
  checkName,
  validateURL,
} = require("../validations/checkShorts.js");

// INDEX
shorts.get("/", async (req, res) => {
  const { writer_id } = req.params;
  try {
    if (writer_id) {
      const writer = await getWriter(writer_id);
      const shortsByWriter = await getShortsByWriterID(writer_id);
      if (shortsByWriter.length > 0) {
        res.status(200).json(shortsByWriter);
      } else {
        res.status(404).json({ error: "No shorts found for this writer" });
      }
    } else {
      const allShorts = await getAllShorts();
      if (allShorts.length > 0) {
        res.status(200).json(allShorts);
      } else {
        res.status(404).json({ error: "No shorts found" });
      }
    }
  } catch (error) {
    console.error("Error fetching all shorts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
shorts.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const short = await getShort(id);
    if (short) {
      res.json(short);
    } else {
      res.status(404).json({ error: "Short not found" });
    }
  } catch (error) {
    console.error(`Error fetching short with ID ${id}:`, error);
    res.status(500).json({ error: "Server error" });
  }
});

// CREATE

shorts.post("/", checkBoolean, checkName, validateURL, async (req, res) => {
  try {
    const short = await createShort(req.body);
    res.status(201).json(short);
  } catch (error) {
    console.error("Error creating short:", error);
    res.status(400).json({ error: "Invalid data provided" });
  }
});

// DELETE

shorts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedShort = await deleteShort(id);
    if (deletedShort) {
      res.status(200).json(deletedShort);
    } else {
      res.status(404).json({ error: "Short not found" });
    }
  } catch (error) {
    console.error(`Error deleting short with ID ${id}:`, error);
    res.status(500).json({ error: "Server error" });
  }
});

// UPDATE

shorts.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedShort = await updateShort(id, req.body);
    if (updatedShort) {
      res.status(200).json(updatedShort);
    } else {
      res.status(404).json({ error: "Short not found" });
    }
  } catch (error) {
    console.error(`Error updating short with ID ${id}:`, error);
    res.status(400).json({ error: "Invalid data provided" });
  }
});

// GET SHORTS BY WRITER ID

shorts.get("/writer/:writer_id", async (req, res) => {
  const { writer_id } = req.params;
  try {
    const shortsByWriter = await getShortsByWriterID(writer_id);
    if (shortsByWriter.length > 0) {
      res.status(200).json(shortsByWriter);
    } else {
      res.status(404).json({ error: "No shorts found for this writer" });
    }
  } catch (error) {
    console.error(
      `Error fetching shorts for writer with ID ${writer_id}:`,
      error
    );
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = shorts;
