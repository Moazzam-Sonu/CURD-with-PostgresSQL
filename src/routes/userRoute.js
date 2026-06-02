import express from "express";

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userControler.js";
import { validateUser } from "../middlewares/userValidation.js";

const router = express.Router();

router.post("/user",validateUser, createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id",validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
