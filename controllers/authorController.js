// DEPENDENCIES
const express = require("express");
const shorts = express.Router();

const authorsController = require("./authorsController");
// localhost:4001/shorts/1/authors
shorts.use("/:short_id/authors", authorsController);

// Queries
const {
  getAllShorts,
  getShort,
  createShort,
  deleteShort,
  updateShort,
} = require("../queries/shorts");

// Validations
const {
  checkBoolean,
  checkName,
  validateURL,
} = require("../validations/checkShorts.js");

// INDEX
shorts.get("/", async (req, res) => {
  const allShorts = await getAllShorts();
  if (allShorts[0]) {
    res.status(200).json(allShorts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
shorts.get("/:id", async (req, res) => {
  const { id } = req.params;
  const short = await getShort(id);
  if (short) {
    res.json(short);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
shorts.post("/", checkBoolean, checkName, validateURL, async (req, res) => {
  try {
    const short = await createShort(req.body);
    res.json(short);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
shorts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedShort = await deleteShort(id);
  if (deletedShort.id) {
    res.status(200).json(deletedShort);
  } else {
    res.status(404).json("Short not found");
  }
});

// UPDATE
shorts.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const { id } = req.params;
  const updatedShort = await updateShort(id, req.body);
  res.status(200).json(updatedShort);
});

module.exports = shorts;
