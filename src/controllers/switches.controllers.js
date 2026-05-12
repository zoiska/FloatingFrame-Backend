const service = require("../services/switches.services");

exports.getAllSwitches = async (req, res) => {
  const data = await service.getAllSwitches();
  res.json(data);
};
