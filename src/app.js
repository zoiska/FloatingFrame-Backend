require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "https://localhost:5173",
      "https://192.168.1.74:5173",
      "https://192.168.0.67:5173",
      "https://192.168.178.9",
    ],
  }),
);
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
