import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import cors from "cors";

import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import paymentRouter from "./Routes/payment.js";
import adminUserRoutes from "./Routes/adminUser.js";
import adminProductRoutes from "./Routes/adminProduct.js";

const app = express();


app.use(bodyParser.json());


app.use(
  cors({
    origin: true, // allow all origins 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Auth"],
    credentials: true,
  })
);

app.options("*", cors());


// home testing route
app.get("/", (req, res) =>
  res.json({ message: "This is home route" })
);

// user Router
app.use("/api/user", userRouter);

// product Router
app.use("/api/product", productRouter);

// cart Router
app.use("/api/cart", cartRouter);

// address Router
app.use("/api/address", addressRouter);

// payment Router
app.use("/api/payment", paymentRouter);

// admin user routes
app.use("/api/admin", adminUserRoutes);

// admin product routes
app.use("/api/admin", adminProductRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "MERN_E_Commerce",
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 1000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
