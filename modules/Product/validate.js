const { check } = require("express-validator");

const validate = (method) => {
  switch (method) {
    case "add": {
      return [
        check("productname", "กรอกชื่อสินค้าให้ถูกต้อง").isLength({ min: 5 }),
        check("productdescription", "กรอกคำอธิบายให้ถูกต้อง").isLength({
          min: 5,
        }),
        check("productprice", "กรอกราคาให้ถูกต้อง").isInt({ gt: 0 }),
      ];
    }
  }
};

module.exports = validate;
