exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("name", 50).notNullable();
      tbl.text("description", 500);

      // Probably should have made tasks there own table

    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.text("name", 50).notNullable();
      tbl.text("description", 500);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.text("name", 500).notNullable();
      tbl.text("description", 500).notNullable();
      tbl.text("notes", 500);
      tbl
        .integer("projectId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .text("project name")
        .unsigned()
        .notNullable()
        .references("name")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .text("project description")
        .unsigned()
        .notNullable()
        .references("description")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("project")
    .dropTableIfExists("TheProject");
};
