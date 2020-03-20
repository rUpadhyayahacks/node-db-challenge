
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("task").then(function() {
    // Inserts seed entries
    return knex("task").insert([
      {
        project_id: 1,
        description: "learn coding",
        notes: "attend lecture",
        completed: true
      },
      {
        project_id: 1,
        description: "start server",
        notes: "npm run server",
        completed: false
      },
      {
        project_id: 2,
        description: "daily project",
        notes: "afternoon assignment",
        completed: true
      },
      {
        project_id: 2,
        description: "lunch",
        notes: "eat healthy",
        completed: false
      },
      {
        project_id: 2,
        description: "Ate burrito",
        completed: true
      },
      {
        project_id: 3,
        description: "Back to coding",
        completed: true
      },
      {
        project_id: 3,
        description: "Restart laptop",
        notes: "laptop slow",
        completed: false
      },
      {
        project_id: 4,
        description: "watch lecture recording",
        notes: "need more practice",
        completed: false
      },
      {
        project_id: 4,
        description: "Cry",
        completed: true
      }
    ]);
  });
};
