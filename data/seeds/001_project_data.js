exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("project")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("project").insert([
        {
          name: "some name",
          description: "a description of the project"
        },
        {
          name: "some other name",
          description: ""
        },
      ]);
    });
};
