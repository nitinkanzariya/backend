import express from "express";
import mongoose from "mongoose";
import { User } from "./schema.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const connectionString =
  "mongo Connection String";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/getUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ userId: id });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/addUser", async (req, res) => {
  try {
    console.log(req.body);

    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
});

app.put("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.updateOne({ userId: id }, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/delete", async (req, res) => {
  try {
    const user = await User.deleteOne({ userId: req.body.userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
