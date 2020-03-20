const express = require("express");
const helmet = require("helmet");

// TODO ProjectsRouter goes here
const ProjectsRouter = require("./projects/projects-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);

server.get("/", (req, res) => {
  res.send(`<h2> Running! </h2>`);
});

module.exports = server;