const service = require("../services/monitors.services");

exports.getAllMonitors = async (req, res) => {
  try {
    const data = await service.getAllMonitors();
    // DEBUG
    console.log("DEBUG: Monitor found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "Monitor not found" });
  }
};

exports.getMonitors = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await service.getMonitors(id);
    // DEBUG
    console.log("DEBUG: Monitor found");
    // Success
    res.status(200).json(data);
  } catch (err) {
    // DEBUG
    console.log(err);
    return res.status(500).json({ message: "Monitor not found" });
  }
};

exports.createMonitors = async (req, res) => {
  try {
    const monitor = await service.createMonitors(req.body);
    // DEBUG
    console.log("Monitor created");
    res.status(201).json(monitor);
  } catch (err) {
    // DEBUG
    console.log(err);
    res.status(500).json({ message: "monitor not created" });
  }
};

exports.updateMonitors = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await service.updateMonitors(id, req.body);
    // If there is no computer to update
    if (!updated) {
      return res.status(404).json({ message: "Monitor not found" });
    }
    // DEBUG
    console.log("Monitor updated");
    res.status(200).json(updated);
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Monitor not updated" });
  }
};

exports.deleteMonitors = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await service.deleteMonitor(id);
    // If there is no computer to delete
    if (!deleted) {
      return res.status(404).json({ message: "Monitor not found" });
    }
    // DEBUG
    console.log("Monitor deleted");
    res.json({ message: "Monitor deleted" });
  } catch (err) {
    // DEBUG
    console.error(err);
    res.status(500).json({ message: "Monitor not deleted" });
  }
};
