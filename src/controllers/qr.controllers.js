const service = require("../services/qr.services");

exports.getAllAssets = async (req, res) => {
  const data = await service.getAllAssets();
  res.json(data);
};
