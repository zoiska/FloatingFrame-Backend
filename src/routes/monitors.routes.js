const router = require("express").Router();
const controller = require("../controllers/monitor.controllers");

// Endpoint for "/api/monitors/"
router.get("/", controller.getAllMonitors);

// Endpoint for "/api/monitors/<id>"
router.get("/:id", controller.getSingleMonitors);

module.exports = router;
