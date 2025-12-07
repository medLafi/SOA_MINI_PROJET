const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// DB Postgres
const db = require("./db/postgree");

// Routes users
const userRoutes = require("./routes/users");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Start service
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(User Service running on port ${PORT});
});
