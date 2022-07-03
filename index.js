const express = require("express");
const cors = require("cors");
const productAPIRoutes = require('./routes/productapi')

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});

app.use('/api/products', productAPIRoutes);

app.listen(4000, () => {
  console.log("Server started in port 4000");
});
