import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

export const Authenticated = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1]  // <-- Support Bearer tokens

  // If frontend sends as "Auth: token" keep fallback
  if (!token) token = req.header("Auth"); 

  if (!token) return res.status(401).json({ message: "Login first" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).json({ message: "User not exist" });

    req.user = user;
    next();
  } 
  catch (error) {
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};
