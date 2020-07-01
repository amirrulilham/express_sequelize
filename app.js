const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const models = require("./models/index");
const router = require("./router/");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
models.sequelize.sync().then(function () {});

router(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
