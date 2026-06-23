require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", true);

app.use(express.json());

// Added routes
app.use("/api/qr", require("./routes/qr.routes"));
app.use("/api/monitor", require("./routes/monitors.routes"));
app.use("/api/computer", require("./routes/computers.routes"));
app.use("/api/switch", require("./routes/switches.routes"));
app.use("/api/assets", require("./routes/assets.routes"));

app.get("/", (req, res) => {
  res.send("Das Backend läuft!");
});

module.exports = app;
