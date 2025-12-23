import { Products } from "../Models/Product.js";

// Admin: get all products
export const getAllProductsAdmin = async (req, res) => {
  try {
    const products = await Products.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: add product
export const addProductAdmin = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: update product
export const updateProductAdmin = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin: delete product
export const deleteProductAdmin = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
