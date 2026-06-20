const router = require("express").Router();
const controller = require("../controllers/switches.controllers");

// Endpoint for /api/switch/...
router.get("/", controller.getAllSwitches); // Get all Switches
router.get("/:id", controller.getSwitches); // Get switch by id
router.post("/", controller.createSwitches); // Create switch
router.patch("/:id", controller.updateSwitches); // Update switch by id
router.delete("/:id", controller.deleteSwitches); // Delete switch by id

module.exports = router;
