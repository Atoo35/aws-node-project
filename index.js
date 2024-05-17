const serverless = require("serverless-http");
const express = require("express");
const { errors } = require('celebrate');
const middlewares = require('./middlewares');
const routes = require("./routes");
const app = express();

app.use(express.json());
routes(app);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.use(errors());
app.use(middlewares.errorHandler);


module.exports.handler = serverless(app);