const service = require("../services/assets.services");

exports.getAllAssets = async (req, res) => {
  const data = await service.getAllAssets();
  res.json(data);
};

exports.getAssetsByQR = async (req, res) => {
  const id = req.params.id;
  const data = await service.getAssetsByQR(id);

  // If there is no data
  if (!data) {
    return res.status(404).json({ message: "Assets not found" });
  }

  res.json(data);
};
