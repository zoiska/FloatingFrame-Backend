const service = require("../services/computers.services");

exports.getAllComputers = async (req, res) => {
  const data = await service.getAllComputers();
  res.json(data);
};

exports.getSingleComputers = async (req, res) => {
  const id = req.params.id;
  const data = await service.getSingleComputers(id);

  // If there is no data
  if (!data) {
    return res.status(404).json({ message: "Computer not found" });
  }

  res.json(data);
};
