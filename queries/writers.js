const db = require("../db/dbConfig.js");

// Get all writers
const getAllWriters = async () => {
  try {
    const allWriters = await db.any("SELECT * FROM writers");
    return allWriters;
  } catch (error) {
    console.error("Error getting all writers:", error);
    throw new Error("Error retrieving writers");
  }
};

// Get a specific writer by ID
const getWriter = async (id) => {
  try {
    const oneWriter = await db.one("SELECT * FROM writers WHERE id=$1", id);
    return oneWriter;
  } catch (error) {
    console.error(`Error getting writer with ID ${id}:`, error);
    throw new Error(`Error retrieving writer with ID ${id}`);
  }
};

// Create a new writer
const createWriter = async (writer) => {
  try {
    const { name, biography, picture_url = null, is_active = false } = writer;

    const newWriter = await db.one(
      `INSERT INTO writers (name, biography, picture_url, is_active) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [name, biography, picture_url, is_active]
    );

    return newWriter;
  } catch (error) {
    console.error("Error creating new writer:", error);
    throw new Error("Error creating writer");
  }
};

// Delete a writer by ID
const deleteWriter = async (id) => {
  try {
    const deletedWriter = await db.one(
      "DELETE FROM writers WHERE id = $1 RETURNING *",
      id
    );
    return deletedWriter;
  } catch (error) {
    console.error(`Error deleting writer with ID ${id}:`, error);
    throw new Error(`Error deleting writer with ID ${id}`);
  }
};

const updateWriter = async (id, writer) => {
  try {
    const { name, biography, picture_url = null, is_active = false } = writer;

    const query = `
      UPDATE writers
      SET name = $1,
          biography = $2,
          picture_url = $3,
          is_active = $4
      WHERE id = $5
      RETURNING *;
    `;

    const updatedWriter = await db.one(query, [
      name,
      biography,
      picture_url,
      is_active,
      id,
    ]);

    return updatedWriter;
  } catch (error) {
    console.error(`Error updating writer with ID ${id}:`, error);
    throw new Error(`Error updating writer with ID ${id}`);
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
    console.error(
      `Error getting shorts for writer with ID ${writer_id}:`,
      error
    );
    throw new Error(`Error retrieving shorts for writer with ID ${writer_id}`);
  }
};

module.exports = {
  getAllWriters,
  getWriter,
  createWriter,
  deleteWriter,
  updateWriter,
  getShortsByWriterID,
};
