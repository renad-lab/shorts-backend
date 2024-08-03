const db = require("../db/dbConfig.js");

// Get all shorts
const getAllShorts = async () => {
  try {
    const allShorts = await db.any("SELECT * FROM shorts");
    return allShorts;
  } catch (error) {
    return error;
  }
};

// Get a specific short by ID
const getShort = async (id) => {
  try {
    const oneShort = await db.one("SELECT * FROM shorts WHERE id=$1", id);
    return oneShort;
  } catch (error) {
    return error;
  }
};

// Create a new short
const createShort = async (short) => {
  try {
    const newShort = await db.one(
      "INSERT INTO shorts (name, url, category, description, is_favorite, writer_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
        short.writer_id,
      ]
    );
    return newShort;
  } catch (error) {
    return error;
  }
};

// Delete a short
const deleteShort = async (id) => {
  try {
    const deletedShort = await db.one(
      "DELETE FROM shorts WHERE id = $1 RETURNING *",
      id
    );
    return deletedShort;
  } catch (error) {
    return error;
  }
};

// Update a short
const updateShort = async (id, short) => {
  try {
    const updatedShort = await db.one(
      "UPDATE shorts SET name=$1, url=$2, category=$3, description=$4, is_favorite=$5, writer_id=$6 WHERE id=$7 RETURNING *",
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
        short.writer_id,
        id,
      ]
    );
    return updatedShort;
  } catch (error) {
    return error;
  }
};

// Get shorts by writer ID
const getShortsByWriterID = async (writer_id) => {
  try {
    const shortsByWriter = await db.any(
      "SELECT * FROM shorts WHERE writer_id = $1",
      writer_id
    );
    return shortsByWriter;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllShorts,
  getShort,
  createShort,
  deleteShort,
  updateShort,
  getShortsByWriterID,
};
