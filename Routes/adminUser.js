import express from "express";
import { Authenticated } from "../Middlewares/auth.js";
import { isAdmin } from "../Middlewares/isAdmin.js";
import {
  getAllUsersAdmin,
  updateUserRole,
} from "../Controllers/adminUser.js";

const router = express.Router();

// admin - get all users
router.get("/users", Authenticated, isAdmin, getAllUsersAdmin);

// admin - update user role
router.put("/user/role", Authenticated, isAdmin, updateUserRole);

export default router;
