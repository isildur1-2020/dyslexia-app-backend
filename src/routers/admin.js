const { Router } = require("express");
const router = Router();
const {
  createAdmin,
  deleteAdmin,
  decreaseTests,
} = require("../controllers/admin");

// create admin
router.post("/", createAdmin);
router.delete("/", deleteAdmin);
router.post("/:username", decreaseTests);

module.exports = router;
