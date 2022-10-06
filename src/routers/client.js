const { Router } = require("express");
const router = Router();
const {
  createClient,
  deleteClient,
  updateClientTests,
  findClientsByGroup,
} = require("../controllers/client");

router.post("/", createClient);
router.delete("/", deleteClient);
router.get("/:group_id", findClientsByGroup);
router.put("/:username", updateClientTests);

module.exports = router;
