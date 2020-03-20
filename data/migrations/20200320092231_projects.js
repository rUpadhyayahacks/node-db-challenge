
exports.up = function(knex) {
    return knex.schema
      .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 256).notNullable();
        tbl.string("description", 255);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
      })
      .createTable("task", tbl => {
        tbl.increments();
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.string("description", 255).notNullable();
        tbl.string("notes", 255);
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(false);
      })
      .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name", 256).notNullable();
        tbl.string("description", 256).notNullable();
        tbl.string("notes", 255);
      })
      .createTable("project_resources", tbl => {
        tbl.primary(["project_id", "resources_id"]);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl
          .integer("resources_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = async function(knex) {
    return await knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("task")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };