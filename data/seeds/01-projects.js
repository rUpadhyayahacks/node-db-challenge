
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").then(function() {
    // Inserts seed entries
    return knex("projects").insert([
      {
        id: 1,
        name: "Workout!",
        description: "Get gym membership",
        completed: false
      },
      {
        id: 2,
        name: "Get to the gym",
        description: "Drive to the gym",
        completed: false
      },
      {
        id: 3,
        name: "Protein",
        description: "Drink Protein shake after workout",
        completed: true
      },
      {
        id: 4,
        name: "Rest",
        description: "Rest muscles",
        completed: false
      }
    ]);
  });
};
