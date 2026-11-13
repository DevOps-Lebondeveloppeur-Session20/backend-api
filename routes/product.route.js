import express from "express";

import { createProduct, deleteProduct, getProducts, getProductsCount, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/count", getProductsCount);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
