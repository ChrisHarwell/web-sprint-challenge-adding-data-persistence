exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          name: "some task to be done",
          description: "a description about the task to be performed",
          notes: "Some notes here",
          projectId: 1,
          "project name": "some name",
          "project description": "a description of the project",
        },
        {
          name: "some other task to be done",
          description: "another description about the task to be performed",
          notes: "",
          projectId: 2,
          "project name": "some other name",
          "project description": "",
        },
      ]);
    });
};
