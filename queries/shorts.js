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
      `
      INSERT INTO shorts (
        name, 
        url, 
        category, 
        description, 
        is_favorite, 
        writer_id, 
        picture_url
      ) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
      `,
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
        short.writer_id,
        short.picture_url,
      ]
    );
    return newShort;
  } catch (error) {
    console.error("Error creating new short:", error);
    throw new Error("Error creating short");
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
      `
      UPDATE shorts 
      SET 
        name = $1, 
        url = $2, 
        category = $3, 
        description = $4, 
        is_favorite = $5, 
        writer_id = $6, 
        picture_url = $7, 
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
      RETURNING *;
      `,
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
        short.writer_id,
        short.picture_url,
        id,
      ]
    );
    return updatedShort;
  } catch (error) {
    console.error(`Error updating short with ID ${id}:`, error);
    throw new Error(`Error updating short with ID ${id}`);
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
