
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// DB Mongo
const db = require("./db/mongo");

// Routes products
const serviceRoutes = require("./routes/services");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/services", serviceRoutes);

// Start service
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(Product Service running on port ${PORT});
});
