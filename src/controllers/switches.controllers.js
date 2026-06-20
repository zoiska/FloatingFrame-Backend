const service = require("../services/switches.services");

exports.getAllSwitches = async (req, res) => {
  try {
    const data = await service.getAllSwitches();
    // DEBUG
    console.log("DEBUG: Switch found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "Switch not found" });
  }
};

exports.getSwitches = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await service.getSwitches(id);
    // DEBUG
    console.log("DEBUG: Switch found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    return res.status(500).json({ message: "Switch not found" });
  }
};

exports.createSwitches = async (req, res) => {
  try {
    const switches = await service.createSwitches(req.body);
    // DEBUG
    console.log("switch created");
    res.status(201).json(switches);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "Switch not created" });
  }
};

exports.updateSwitches = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await service.updateSwitch(id, req.body);
    // If there is no Switch to update
    if (!updated) {
      return res.status(404).json({ message: "Switch not found" });
    }
    // DEBUG
    console.log("Switch updated");
    res.status(200).json(updated);
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Switch not updated" });
  }
};

exports.deleteSwitches = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await service.deleteSwitch(id);
    // If there is no switch to delete
    if (!deleted) {
      return res.status(404).json({ message: "Switch not found" });
    }
    // DEBUG
    console.log("Switch deleted");
    res.json({ message: "Switch deleted" });
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Switch not deleted" });
  }
};
