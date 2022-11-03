const fs = require("fs");
const path = require("path");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const moment = require("moment");
const express = require("express");
const nodemailer = require("nodemailer");
const { isUser } = require("./middlewares/jwt");
require("./db/mongodb");
const apiRouter = require("./routers/api");

const app = express();
// SETTINGS
app.set("PORT", process.env.PORT || 62345);
const publicPath = path.join(__dirname, "public");
// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicPath);
  },
});

var upload = multer({ storage });

app.get("/api", (req, res, next) => {
  res.send("Hello World!");
  next();
});

app.post("/data", isUser, (req, res) => {
  const { userData, videoLink, screenLink } = req.body;

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DESTINY,
    subject: "Dyslexia App",
    html: `
    <h4>Dyslexia App Test</h4>
    <b>AGE:</b> <em>${userData?.age}</em>
    <br/>
    <b>NAME:</b> <em>${userData?.name}</em>
    <br/>
    <b>GENDER:</b> <em>${userData?.gender}</em>
    <br/>
    <b>BLOOD TYPE:</b> <em>${userData?.bloodType}</em>
    <br/>
    <b>NATIONALITY:</b> <em>${userData?.nationality}</em>
    <br/>
    <b>DATE OF BIRTH:</b> <em>${userData?.dateOfBirth}</em>
    <br/>
    <b>LINK CAMERA RECORD:</b> <em>${videoLink}</em>
    <br/>
    <b>LINK SCREEN RECORD:</b> <em>${screenLink}</em>
    `,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err.message);
      res.status(200).json({
        err: err.message,
        message: "Email error",
      });
    } else {
      console.log("Email sent");
      res.status(200).json({
        err: null,
        message: info,
      });
    }
  });
});

app.post("/upload", isUser, upload.single("record"), (req, res) => {
  try {
    const { mimetype, path } = req.file;
    const extension = mimetype.split("/")?.[1];
    const filename = moment().format();
    let currentPath = path?.split("/");
    currentPath.pop();
    currentPath.push(filename);
    currentPath = currentPath.join("/");
    const newPath = `${currentPath}.${extension}`;
    fs.renameSync(path, newPath);
    res.status(200).json({
      err: null,
      URL: `/${filename}.${extension}`,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      err,
      URL: null,
    });
  }
});

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(app.get("PORT"), () => {
  console.log("Listening on port: ", app.get("PORT"));
});
