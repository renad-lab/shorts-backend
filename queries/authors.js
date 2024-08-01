const db = require("../db/dbConfig.js");

const getAllAuthors = async () => {
  try {
    const allAuthors = await db.any("SELECT * FROM authors");
    return allAuthors;
  } catch (error) {
    return error;
  }
};

const getAuthor = async (id) => {
  try {
    const oneAuthor = await db.one("SELECT * FROM authors WHERE id=$1", id);
    return oneAuthor;
  } catch (error) {
    return error;
  }
};

// CREATE
const createAuthor = async (author) => {
  try {
    const newAuthor = await db.one(
      "INSERT INTO authors (name, url, category, is_active) VALUES($1, $2, $3, $4) RETURNING *",
      [author.name, author.url, author.category, author.is_active]
    );
    return newAuthor;
  } catch (error) {
    return error;
  }
};

const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await db.one(
      "DELETE FROM authors WHERE id = $1 RETURNING *",
      id
    );
    return deletedAuthor;
  } catch (error) {
    return error;
  }
};

const updateAuthor = async (id, author) => {
  try {
    const updatedAuthor = await db.one(
      "UPDATE authors SET name=$1, url=$2, category=$3, is_active=$4 WHERE id=$5 RETURNING *",
      [author.name, author.url, author.category, author.is_active, id]
    );
    return updatedAuthor;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
};
