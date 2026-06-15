const service = require("../services/switches.services");

exports.getAllSwitches = async (req, res) => {
  const data = await service.getAllSwitches();
  res.json(data);
};

exports.getSingleSwitches = async (req, res) => {
  const id = req.params.id;
  const data = await service.getSingleSwitches(id);

  // If there is no data
  if (!data) {
    return res.status(404).json({ message: "Switch not found" });
  }

  res.json(data);
};
