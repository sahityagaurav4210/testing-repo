const express = require("express");

const app = express();

app.get("/ping", (request, response) => {
  return response.status(200).json({
    message: "Pong",
    ip: request.ip,
  });
});

app.listen(1222, () => console.log("Server is started"));
