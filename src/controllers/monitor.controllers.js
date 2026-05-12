const service = require("../services/monitors.services");

exports.getAllMonitors = async (req, res) => {
  const data = await service.getAllMonitors();
  res.json(data);
};
