const express = require("express");
const router = express.Router(); 
const mongoose = require("../db/mongo");


const Service = mongoose.model("Service", new mongoose.Schema({
  id: Number,
  nom_service: String
}));


router.get("/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
