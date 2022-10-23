const { Router } = require("express");
const router = Router();
const {
  createClient,
  deleteClient,
  decreaseTests,
  updateClientTests,
  findClientsByGroup,
} = require("../controllers/client");

router.post("/", createClient);
router.delete("/:username", deleteClient);
router.get("/:group_id", findClientsByGroup);
router.put("/:username", updateClientTests);
router.post("/:username", decreaseTests);

module.exports = router;
