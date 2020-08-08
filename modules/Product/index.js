const express = require("express");
const route = express.Router();

const { product } = require("./add");
const validate = require("./validate");

route.post("/add", validate("add"), async (req, res) => {
  product.add(req, res);
});

module.exports = route;
