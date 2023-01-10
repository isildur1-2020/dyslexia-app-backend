const { config } = require("dotenv");
config();

const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
require("./db/mongodb");
const apiRouter = require("./routers/api");
const app = express();
// SETTINGS
app.set("PORT", process.env.PORT || 62345);
const { publicPath } = require("./utils/paths");
// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use("/api/static", express.static(publicPath));

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(app.get("PORT"), () => {
  console.log("Listening on port: ", app.get("PORT"));
});
