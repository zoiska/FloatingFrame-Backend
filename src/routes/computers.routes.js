const router = require("express").Router();
const controller = require("../controllers/computers.controllers");

router.get("/", controller.getAllComputers);

module.exports = router;
