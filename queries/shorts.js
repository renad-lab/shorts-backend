const db = require("../db/dbConfig.js");

const getAllShorts = async () => {
  try {
    const allShorts = await db.any("SELECT * FROM shorts");
    return allShorts;
  } catch (error) {
    return error;
  }
};

const getShort = async (id) => {
  try {
    const oneShort = await db.one("SELECT * FROM shorts WHERE id=$1", id);
    return oneShort;
  } catch (error) {
    return error;
  }
};

// CREATE
const createShort = async (short) => {
  try {
    const newShort = await db.one(
      "INSERT INTO shorts (name, url, category, description, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
      ]
    );
    return newShort;
  } catch (error) {
    return error;
  }
};

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

const updateShort = async (id, short) => {
  try {
    const updatedShort = await db.one(
      "UPDATE shorts SET name=$1, url=$2, category=$3, description=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [
        short.name,
        short.url,
        short.category,
        short.description,
        short.is_favorite,
        id,
      ]
    );
    return updatedShort;
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
};
