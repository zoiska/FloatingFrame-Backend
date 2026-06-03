const service = require("../services/monitors.services");

exports.getAllMonitors = async (req, res) => {
  const data = await service.getAllMonitors();
  res.json(data);
};

exports.getSingleMonitors = async (req, res) => {
  const id = req.params.id;
  const data = await service.getSingleMonitors(id);

  // If there is no data
  if (!data) {
    return res.status(404).json({ message: "Monitor not found" });
  }

  res.json(data);
};
