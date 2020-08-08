const express = require("express");
const app = express();

const ProductRoute = require("./modules/Product");

app.use(express.json());

app.use("/product", ProductRoute);

app.listen(3000, console.log("Express Validator "));
