const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  addResource,
  update,
  remove,
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function addResource(resources) {
  return db("resources")
    .insert(resources)
    .then((ids) => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("resources")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(id);
    });
}

async function remove(id) {
  const deleted = await findById(id);
  const changes = await db("resources").where({ id }).del();
  return changes ? deleted : undefined;
}
