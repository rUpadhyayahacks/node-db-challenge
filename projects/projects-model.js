const db = require("../data/db-config.js");

module.exports = {
  getResources,
  getProjects,
  getTasks,
  addProject,
  addResource,
  addTasks
};

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources").insert(resource, "id");
}

function getProjects() {
  return db("projects");
}

function addProject(project) {
  return db("projects").insert(project, "id");
}

function getTasks() {
  return db("task")
    .join("projects", "projects.id", "task.project_id")
    .select(
      "task.description as task_description",
      "projects.description",
      "projects.name"
    );
}

function addTasks(task) {
  return db("task").insert(task, "id");
}