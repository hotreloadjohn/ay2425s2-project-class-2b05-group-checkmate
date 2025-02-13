const express = require("express");
const router = express.Router();
const prisma = require("../../prisma/prismaClient"); // Ensure correct Prisma import

// // Get all goals
// router.get("/", async (req, res) => {
//   try {
//       const goals = await prisma.goal.findMany();
//       res.json(goals);
//   } catch (error) {
//       console.error("Error fetching goals:", error);
//       res.status(500).json({ error: "Internal server error" });
//   }
// });

// Get all goals for a specific user
router.get("/", async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from request query

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const goals = await prisma.goal.findMany({
            where: { userId: parseInt(userId) },
        });

        res.json(goals);
    } catch (error) {
        console.error("Error fetching user goals:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});



// Get goals by id
router.get("/:id", async (req, res) => {
  try {
      const goalId = parseInt(req.params.id);
      
      if (isNaN(goalId)) {
          return res.status(400).json({ error: "Invalid goal ID" });
      }

      const goal = await prisma.goal.findUnique({
          where: { id: goalId },
      });

      if (!goal) {
          return res.status(404).json({ error: "Goal not found" });
      }

      res.json(goal);
  } catch (error) {
      console.error("Error fetching goal:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});


// Create a new goal
router.post("/", async (req, res) => {
  try {
      const { title, amount, description, deadline, userId } = req.body; 

      if (!userId) {
          return res.status(400).json({ error: "Missing userId. A goal must belong to a user." });
      }

      const newGoal = await prisma.goal.create({
          data: {
              title,
              amount: parseFloat(amount),
              description: description || null,
              deadline: new Date(deadline),
              userId: parseInt(userId) // Ensure userId is an integer
          },
      });

      res.json(newGoal);
  } catch (error) {
      console.error("Error creating goal:", error);
      res.status(500).json({ error: "Failed to create goal" });
  }
});



// Update a goal
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, amount, description, deadline } = req.body;

        const updatedGoal = await prisma.goal.update({
            where: { id: parseInt(id) },
            data: { title, amount: parseFloat(amount), description, deadline: new Date(deadline) },
        });
        res.json(updatedGoal);
    } catch (error) {
        console.error("Error updating goal:", error);
        res.status(500).json({ error: "Failed to update goal" });
    }
});

// Delete a goal
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.goal.delete({ where: { id: parseInt(id) } });
        res.json({ message: "Goal deleted successfully" });
    } catch (error) {
        console.error("Error deleting goal:", error);
        res.status(500).json({ error: "Failed to delete goal" });
    }
});

module.exports = router; // ✅ Ensure this is defined correctly




