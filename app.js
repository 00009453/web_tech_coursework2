const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const errorPage = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const jobRoute = require("./routes/job");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(jobRoute);
app.use(errorPage.getErrorPage);

mongoose
  .connect(
    "mongodb+srv://00009453:wiut_student@cluster0.lzlxxau.mongodb.net/jobs"
  )
  .then((result) => {
    app.listen(process.env.PORT || 4000);
  })
  .catch((err) => {
    console.log(err);
  });
