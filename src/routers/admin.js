const { Router } = require("express");
const router = Router();
const { createAdmin, deleteAdmin } = require("../controllers/admin");

// create admin
router.post("/", createAdmin);
router.delete("/", deleteAdmin);

module.exports = router;
