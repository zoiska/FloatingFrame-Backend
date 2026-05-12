const service = require("../services/computers.services");

exports.getAllComputers = async (req, res) => {
  const data = await service.getAllComputers();
  res.json(data);
};
