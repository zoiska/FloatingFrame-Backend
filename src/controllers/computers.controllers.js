const service = require("../services/computers.services");

exports.getAllComputers = async (req, res) => {
  try {
    const data = await service.getAllComputers();
    // DEBUG
    console.log("DEBUG: Computer found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "Computer not found" });
  }
};

exports.getComputers = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await service.getComputers(id);
    // DEBUG
    console.log("DEBUG: Computer found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    return res.status(500).json({ message: "Computer not found" });
  }
};

exports.createComputers = async (req, res) => {
  try {
    const computer = await service.createComputers(req.body);
    // DEBUG
    console.log("Computer created");
    res.status(201).json(computer);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "Computer not created" });
  }
};

exports.updateComputers = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await service.updateComputer(id, req.body);
    // If there is no computer to update
    if (!updated) {
      return res.status(404).json({ message: "Computer not found" });
    }
    // DEBUG
    console.log("Computer updated");
    res.status(200).json(updated);
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Computer not updated" });
  }
};

exports.deleteComputers = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await service.deleteComputer(id);
    // If there is no computer to delete
    if (!deleted) {
      return res.status(404).json({ message: "Computer not found" });
    }
    // DEBUG
    console.log("Computer deleted");
    res.json({ message: "Computer deleted" });
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Computer not deleted" });
  }
};
