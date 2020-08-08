const { validationResult } = require("express-validator");
const validateresult = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    return true;
  }
};

module.exports = validateresult;
