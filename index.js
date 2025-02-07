const express = require("express");
const wishListRoutes = require("./src/wishlist/routes");
const profileRoutes = require("./src/user/routes");
const reviewsRoutes = require("./src/reviews/routes");
const bookSearchRoutes = require('./src/booksearch/routes.js');
const SCroutes = require('./src/ShoppingCart/routes');

const { user } = require("pg/lib/defaults");

const app = express();
const pool = require("./db");

//TODO: REMOVE BOOKS/ REMOVE WISHLISTS/ FIGURE OUT URLS

app.use(express.json()); // req.body

app.use("/", wishListRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/user", profileRoutes);
app.use("/book", bookSearchRoutes);
app.use("/ShoppingCart", SCroutes);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

pool.connect();
