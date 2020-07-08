const User = require("../controllers/user.controller");

const router = (app) => {
  app.route("/").get((req, res) => {
    res.json({ hai: "hai" });
  });

  app.route("/user").get(User.findAll);
};
module.exports = router;
