const db = require("../data/db-config.js");

module.exports = {
  find,
  findTasks,
  findById,
  addProject,
  update,
  remove,
};

function find() {
  return db("project");
}
function findTasks() {
  return db("tasks");
}

function findById(id) {
  return db("project").where({ id }).first();
}

function addProject(project) {
  return db("project")
    .insert(project)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("project")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}

async function remove(id) {
  const deleted = await findById(id);
  const changes = await db("project").where({ id }).del();
  return changes ? deleted : undefined;
}
