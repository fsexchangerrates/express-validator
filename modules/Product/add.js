const validateresult = require("../../util/validateresult");

const product = {};

product.add = async (req, res) => {
  if (validateresult(req, res) === true) {
    res.status(200).json({ staus: true });
  }
};

module.exports = { product };
