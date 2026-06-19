import fs from "fs";
import https from "https";

// Starting point for our Server
const app = require("./src/app");

const options = {
  key: fs.readFileSync("./certs/key.pem"),
  cert: fs.readFileSync("./certs/cert.pem"),
};

const PORT = process.env.PORT || 3000;

https.createServer(options, app).listen(PORT, () => {
  console.log("HTTPS server läuft");
});
