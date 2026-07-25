import express from "express";
import rateLimit from "express-rate-limit";
import { sendContactForm } from "../controllers/contactController.js";

const router = express.Router();

// Rate limiter: Max 5 submissions per 15 minutes per IP address
const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact form submissions from this IP. Please wait 15 minutes before sending another request.",
  },
});

router.post("/send", contactRateLimiter, sendContactForm);

export default router;
