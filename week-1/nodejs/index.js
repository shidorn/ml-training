const http = require("http");
const express = require("express");
const app = express();
const Router = require("./routes");

app.use("/api/v1", Router);

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
