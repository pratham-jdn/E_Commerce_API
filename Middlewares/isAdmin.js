export const isAdmin = (req, res, next) => {
  try {
    // req.user is already attached by Authenticated middleware
    if (!req.user || req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Admin access denied" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Authorization failed" });
  }
};
