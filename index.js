const express = require("express");
const cors = require("cors");
const productAPIRoutes = require('./routes/productapi')
const products = require('./data.json');
const hbs = require('hbs');
const connectDatabase = require('./database/connection')

//Connect database
connectDatabase()


const app = express();
app.use(cors());
app.use(express.json());
app.set('view engine', 'hbs');
app.use("/static", express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + '/views/partials')

// app.use((req,res, next) => {
//   console.log("This is a middleware");
//   next();
// })

const logger = (req, res, next)=> {
  req.name = "Aabiskar"
  console.log("This is a middleware");
  next();
}
const logger2 = (req, res, next)=> {
  console.log("This is next middleware");
  next();
}

app.get("/" , [logger, logger2], (req, res) => {
  console.log(req.name);
  res.render('index', {products});
});

app.use('/api/products', productAPIRoutes);

app.listen(4000, () => {
  console.log("Server started in port 4000");
});
