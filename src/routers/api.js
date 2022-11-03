const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const clientRouter = require("./client");
const authRouter = require("./auth");
const languajeRouter = require("./languaje");
const audioRouter = require("./audio");
const emailRouter = require("./email");
const videoRouter = require("./video");
const { isAdmin, isUser } = require("../middlewares/jwt");

router.get("/", (req, res) => res.send("Hello World!"));
router.use("/admin", adminRouter);
router.use("/client", isAdmin, clientRouter);
router.use("/languaje", languajeRouter);
router.use("/auth", authRouter);
router.use("/audio", audioRouter);
router.use("/email", isUser, emailRouter);
router.use("/video", isUser, videoRouter);

module.exports = router;
