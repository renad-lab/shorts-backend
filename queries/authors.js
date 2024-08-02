// const db = require("../db/dbConfig.js");

// // Get all authors
// const getAllAuthors = async () => {
//   try {
//     const allAuthors = await db.any("SELECT * FROM authors");
//     return allAuthors;
//   } catch (error) {
//     console.error("Error getting all authors:", error);
//     throw new Error("Error retrieving authors");
//   }
// };

// // Get a specific author by ID
// const getAuthor = async (id) => {
//   try {
//     const oneAuthor = await db.one("SELECT * FROM authors WHERE id=$1", id);
//     return oneAuthor;
//   } catch (error) {
//     console.error(`Error getting author with ID ${id}:`, error);
//     throw new Error(`Error retrieving author with ID ${id}`);
//   }
// };

// // Create a new author
// const createAuthor = async (author) => {
//   try {
//     const newAuthor = await db.one(
//       "INSERT INTO authors (name, biography) VALUES($1, $2) RETURNING *",
//       [author.name, author.biography]
//     );
//     return newAuthor;
//   } catch (error) {
//     console.error("Error creating new author:", error);
//     throw new Error("Error creating author");
//   }
// };

// // Delete an author by ID
// const deleteAuthor = async (id) => {
//   try {
//     const deletedAuthor = await db.one(
//       "DELETE FROM authors WHERE id = $1 RETURNING *",
//       id
//     );
//     return deletedAuthor;
//   } catch (error) {
//     console.error(`Error deleting author with ID ${id}:`, error);
//     throw new Error(`Error deleting author with ID ${id}`);
//   }
// };

// // Update an author by ID
// const updateAuthor = async (id, author) => {
//   try {
//     const updatedAuthor = await db.one(
//       "UPDATE authors SET name=$1, biography=$2 WHERE id=$3 RETURNING *",
//       [author.name, author.biography, id]
//     );
//     return updatedAuthor;
//   } catch (error) {
//     console.error(`Error updating author with ID ${id}:`, error);
//     throw new Error(`Error updating author with ID ${id}`);
//   }
// };

// module.exports = {
//   getAllAuthors,
//   getAuthor,
//   createAuthor,
//   deleteAuthor,
//   updateAuthor,
// };

const db = require("../db/dbConfig.js");

// Get all authors
const getAllAuthors = async () => {
  try {
    const allAuthors = await db.any("SELECT * FROM authors");
    return allAuthors;
  } catch (error) {
    console.error("Error getting all authors:", error);
    throw new Error("Error retrieving authors");
  }
};

// Get a specific author by ID
const getAuthor = async (id) => {
  try {
    const oneAuthor = await db.one("SELECT * FROM authors WHERE id=$1", id);
    return oneAuthor;
  } catch (error) {
    console.error(`Error getting author with ID ${id}:`, error);
    throw new Error(`Error retrieving author with ID ${id}`);
  }
};

// Create a new author
const createAuthor = async (author) => {
  try {
    const newAuthor = await db.one(
      "INSERT INTO authors (name, biography) VALUES($1, $2) RETURNING *",
      [author.name, author.biography]
    );
    return newAuthor;
  } catch (error) {
    console.error("Error creating new author:", error);
    throw new Error("Error creating author");
  }
};

// Delete an author by ID
const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await db.one(
      "DELETE FROM authors WHERE id = $1 RETURNING *",
      id
    );
    return deletedAuthor;
  } catch (error) {
    console.error(`Error deleting author with ID ${id}:`, error);
    throw new Error(`Error deleting author with ID ${id}`);
  }
};

// Update an author by ID
const updateAuthor = async (id, author) => {
  try {
    const updatedAuthor = await db.one(
      "UPDATE authors SET name=$1, biography=$2 WHERE id=$3 RETURNING *",
      [author.name, author.biography, id]
    );
    return updatedAuthor;
  } catch (error) {
    console.error(`Error updating author with ID ${id}:`, error);
    throw new Error(`Error updating author with ID ${id}`);
  }
};

// Get shorts by author ID
const getShortsByAuthorID = async (author_id) => {
  try {
    const shortsByAuthor = await db.any(
      "SELECT * FROM shorts WHERE author_id = $1",
      author_id
    );
    return shortsByAuthor;
  } catch (error) {
    console.error(
      `Error getting shorts for author with ID ${author_id}:`,
      error
    );
    throw new Error(`Error retrieving shorts for author with ID ${author_id}`);
  }
};

module.exports = {
  getAllAuthors,
  getAuthor,
  createAuthor,
  deleteAuthor,
  updateAuthor,
  getShortsByAuthorID,
};
