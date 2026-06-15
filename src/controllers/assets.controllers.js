const service = require("../services/assets.services");

exports.getAllAssets = async (req, res) => {
  const data = await service.getAllAssets();
  res.json(data);
};
