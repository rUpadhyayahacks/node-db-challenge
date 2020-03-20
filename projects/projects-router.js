const express = require("express");
// TODO Projects model
const Projects = require("./projects-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve Projects" });
    });
});

router.post("/", (req, res) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to add Project" });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to get list of resources." });
    });
});

router.post("/resources", (req, res) => {
  const resource = req.body;
  Projects.addResource(resource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Failed to add Resource" });
    });
});

router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to retrieve list of tasks" });
    });
});
router.post("/tasks", (req, res) => {
  const task = req.body;
  Projects.addTasks(task)
    .then(tasks => {
      res.status(201).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Failed to add task" });
    });
});

module.exports = router;