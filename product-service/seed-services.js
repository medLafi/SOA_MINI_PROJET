const mongoose = require("./db/mongo"); 
const Service = mongoose.model("Service", new mongoose.Schema({
  id: Number,
  nom_service: String
}));

Service.insertMany([
  { id: 1, nom_service: "Service  numero 1" },
  { id: 2, nom_service: "Service numero 2" },
  { id: 3, nom_service: "Service numero 3" }
])
.then(() => {
  console.log("Services créés !");
  process.exit();
})
.catch(err => console.log(err));

