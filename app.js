const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const models = require("./models/index");
const router = require("./router/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to database')
  })
  .catch((err) => {
    console.log(err);
  });
// models.sequelize.sync().then(() => {}).catch(() => {});

router(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
