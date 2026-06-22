// Starting point for our Server
const app = require("./src/app");
const fs = require("fs");
const https = require("https");

const options = {
  key: fs.readFileSync("./localhost+1-key.pem"),
  cert: fs.readFileSync("./localhost+1.pem"),
};

const PORT = process.env.PORT || 3000;

https.createServer(options, app).listen(PORT, () => {
  console.log("HTTPS server läuft");
});
