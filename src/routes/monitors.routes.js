const router = require("express").Router();
const controller = require("../controllers/monitor.controllers");

router.get("/", controller.getAllMonitors);

module.exports = router;
