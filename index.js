const express = require("express");
const cors = require("cors");
const User = require("./config");

const app = express();

app.use(express.json());
app.use(cors());

// Get all users
app.get("/users", async (req, res) => {
  try {
    const snapshot = await User.get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const data = req.body;
    await User.add(data);
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Update a user
app.post("/update", async (req, res) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.status(200).json({ message: "User updated" });
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await User.doc(id).delete();
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
