
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "some resource name",
          description: "a description of the resource" 
        },
        {
          name: "some other resource name",
          description: "" 
        }
      ]);
    });
};
