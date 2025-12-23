import express from "express";
import { Authenticated } from "../Middlewares/auth.js";
import { isAdmin } from "../Middlewares/isAdmin.js";
import {
  getAllProductsAdmin,
  addProductAdmin,
  updateProductAdmin,
  deleteProductAdmin,
} from "../Controllers/adminProduct.js";

const router = express.Router();

// admin product routes
router.get("/products", Authenticated, isAdmin, getAllProductsAdmin);
router.post("/product/add", Authenticated, isAdmin, addProductAdmin);
router.put("/product/:id", Authenticated, isAdmin, updateProductAdmin);
router.delete("/product/:id", Authenticated, isAdmin, deleteProductAdmin);

export default router;
