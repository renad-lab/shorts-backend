// const express = require("express");
// const shorts = express.Router();

// const reviewsController = require("./reviewsController");
// // localhost:4001/shorts/1/reviews
// shorts.use("/:short_id/reviews", reviewsController);

// // Queries
// const {
//   getAllShorts,
//   getShort,
//   createShort,
//   deleteShort,
//   updateShort,
//   getShortsByAuthorID,
// } = require("../queries/shorts");

// // Validations
// const {
//   checkBoolean,
//   checkName,
//   validateURL,
// } = require("../validations/checkShorts.js");

// // INDEX
// shorts.get("/", async (req, res) => {
//   try {
//     const allShorts = await getAllShorts();
//     if (allShorts.length > 0) {
//       res.status(200).json(allShorts);
//     } else {
//       res.status(404).json({ error: "No shorts found" });
//     }
//   } catch (error) {
//     console.error("Error fetching all shorts:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // SHOW
// shorts.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const short = await getShort(id);
//     if (short) {
//       res.json(short);
//     } else {
//       res.status(404).json({ error: "Short not found" });
//     }
//   } catch (error) {
//     console.error(`Error fetching short with ID ${id}:`, error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // CREATE
// shorts.post("/", checkBoolean, checkName, validateURL, async (req, res) => {
//   try {
//     const short = await createShort(req.body);
//     res.status(201).json(short);
//   } catch (error) {
//     console.error("Error creating short:", error);
//     res.status(400).json({ error: "Invalid data provided" });
//   }
// });

// // DELETE
// shorts.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedShort = await deleteShort(id);
//     if (deletedShort) {
//       res.status(200).json(deletedShort);
//     } else {
//       res.status(404).json({ error: "Short not found" });
//     }
//   } catch (error) {
//     console.error(`Error deleting short with ID ${id}:`, error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // UPDATE
// shorts.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedShort = await updateShort(id, req.body);
//     if (updatedShort) {
//       res.status(200).json(updatedShort);
//     } else {
//       res.status(404).json({ error: "Short not found" });
//     }
//   } catch (error) {
//     console.error(`Error updating short with ID ${id}:`, error);
//     res.status(400).json({ error: "Invalid data provided" });
//   }
// });

// // GET SHORTS BY AUTHOR ID
// shorts.get("/author/:author_id", async (req, res) => {
//   const { author_id } = req.params;
//   try {
//     const shortsByAuthor = await getShortsByAuthorID(author_id);
//     if (shortsByAuthor.length > 0) {
//       res.status(200).json(shortsByAuthor);
//     } else {
//       res.status(404).json({ error: "No shorts found for this author" });
//     }
//   } catch (error) {
//     console.error(
//       `Error fetching shorts for author with ID ${author_id}:`,
//       error
//     );
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = shorts;

const express = require("express");
const shorts = express.Router();

const reviewsController = require("./reviewsController");
// localhost:4001/shorts/:short_id/reviews
shorts.use("/:short_id/reviews", reviewsController);

// Queries
const {
  getAllShorts,
  getShort,
  createShort,
  deleteShort,
  updateShort,
  getShortsByAuthorID,
} = require("../queries/shorts");

// Validations
const {
  checkBoolean,
  checkName,
  validateURL,
} = require("../validations/checkShorts.js");

// INDEX
// URL: http://localhost:4001/shorts
// Method: GET
// Description: Fetches all shorts
shorts.get("/", async (req, res) => {
  try {
    const allShorts = await getAllShorts();
    if (allShorts.length > 0) {
      res.status(200).json(allShorts);
    } else {
      res.status(404).json({ error: "No shorts found" });
    }
  } catch (error) {
    console.error("Error fetching all shorts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// SHOW
// URL: http://localhost:4001/shorts/:id
// Method: GET
// Description: Fetches a short by its ID. Replace :id with the specific short ID
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
// URL: http://localhost:4001/shorts
// Method: POST
// Description: Creates a new short with the data provided in the request body
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
// URL: http://localhost:4001/shorts/:id
// Method: DELETE
// Description: Deletes a short by its ID. Replace :id with the specific short ID
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
// URL: http://localhost:4001/shorts/:id
// Method: PUT
// Description: Updates a short by its ID with the data provided in the request body. Replace :id with the specific short ID
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

// GET SHORTS BY AUTHOR ID
// URL: http://localhost:4001/shorts/author/:author_id
// Method: GET
// Description: Fetches shorts for a specific author. Replace :author_id with the specific author ID
shorts.get("/author/:author_id", async (req, res) => {
  const { author_id } = req.params;
  try {
    const shortsByAuthor = await getShortsByAuthorID(author_id);
    if (shortsByAuthor.length > 0) {
      res.status(200).json(shortsByAuthor);
    } else {
      res.status(404).json({ error: "No shorts found for this author" });
    }
  } catch (error) {
    console.error(
      `Error fetching shorts for author with ID ${author_id}:`,
      error
    );
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = shorts;
