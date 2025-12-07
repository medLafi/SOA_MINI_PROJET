const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// importer les routes
app.use(require("./routes/auth"));
app.use(require("./routes/users"));
app.use(require("./routes/services"));

app.listen(3000, () => console.log("Server running"));
