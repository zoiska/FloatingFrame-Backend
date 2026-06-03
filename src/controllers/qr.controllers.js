const service = require("../services/qr.services");

exports.getAllQR = async (req, res) => {
  const data = await service.getAllQR();
  res.json(data);
};

exports.getSingleQR = async (req, res) => {
  const id = req.params.id;
  const data = await service.getSingleQR(id);

  // If there is no data
  if (!data) {
    return res.status(404).json({ message: "QR-Code not found" });
  }

  res.json(data);
};
