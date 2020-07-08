"user strict";
const User = require("../models/index").Users;
exports.findAll = (req, res) => {
  User.findAll({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {});
};
