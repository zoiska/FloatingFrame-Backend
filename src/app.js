require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Added routes
app.use("/api/qr", require("./routes/qr.routes"));
app.use("/api/monitor", require("./routes/monitors.routes"));
app.use("/api/computer", require("./routes/computers.routes"));
app.use("/api/switch", require("./routes/switches.routes"));

app.get("/", (req, res) => {
  res.send("Das Backend läuft!");
});

module.exports = app;
