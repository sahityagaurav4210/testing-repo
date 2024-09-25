const express = require("express");

const app = express();

app.get("/ping", (request, response) => {
  return response.status(200).json({
    message: "Pong",
    data:"All system are operational."
  });
});

app.get("/health", (request, response) => {
  return response.status(200).json({
    message: "All system are operational.",
  });
});

app.listen(1222, () => console.log("Server is started"));
