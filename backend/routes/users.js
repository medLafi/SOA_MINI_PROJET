const express = require("express");
const router = express.Router(); 

const pool = require("../db/postgres"); 


router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, login FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router; 
