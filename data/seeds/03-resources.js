
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").then(function() {
    // Inserts seed entries
    return knex("resources").insert([
      {
        id: 1,
        name: "Laptop",
        description: "Macbook air",
        notes: "Coder's machine"
      },
      {
        id: 2,
        name: "Headband",
        description: "To keep sweat out of my eyes",
        notes: "Actually just to look good"
      },
      {
        id: 3,
        name: "New shoes",
        description: "Any excuse to get new shoes"
      },
      {
        id: 4,
        name: "My Brain",
        description: "very necessary",
        notes: "only half functional"
      }
    ]);
  });
};
