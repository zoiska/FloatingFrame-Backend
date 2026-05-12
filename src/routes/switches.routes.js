const router = require("express").Router();
const controller = require("../controllers/switches.controllers");

router.get("/", controller.getAllSwitches);

module.exports = router;
