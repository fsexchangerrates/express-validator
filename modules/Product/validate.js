const { check } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "add": {
      return [
        check("productname", "กรอกชื่อสินค้า").isLength({ min: 5 }),
        check("productdescription", "กรอกคำอธิบาย").isLength({ min: 5 }),
        check("productprice", "กรอกราคา").isInt({ gt: 0 }),
      ];
    }
  }
};

module.exports = validate;
