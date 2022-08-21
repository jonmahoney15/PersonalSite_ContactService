import { Router, Request, Response } from "express";
import { SendEmail } from "../contact/ContactController";
import { auth, rateLimiter } from "../middleware";

const router = Router();

router.get("/health", (req: Request, res: Response) =>
  res.status(200).json({ Status: "Success", message: "Contact is Healthy" })
);

router.post("/contact/contact", auth, rateLimiter, SendEmail);

export { router as Router };

