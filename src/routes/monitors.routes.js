const router = require("express").Router();
const controller = require("../controllers/monitors.controllers");

// Endpoint for /api/monitor/...
router.get("/", controller.getAllMonitors); // Get all Monitors
router.get("/:id", controller.getMonitors); // Get computer by id
router.post("/", controller.createMonitors); // Create monitor
router.patch("/:id", controller.updateMonitors); // Update monitor by id
router.delete("/:id", controller.deleteMonitors); // Delete monitor by id

module.exports = router;
