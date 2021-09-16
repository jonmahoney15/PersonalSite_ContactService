import { Router } from "express";
import { auth, rateLimiter } from "../Middleware";

const router = Router();

router.get("/contact/Contact", auth, (req, res) =>
  res.status(200).json({ Status: "Success", message: "Contact is Healthy" })
);

router.post("/contact", auth, rateLimiter, SendEmail);

export { router as Router };
