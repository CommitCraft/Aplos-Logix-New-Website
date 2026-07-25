import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// CORS Configuration
const allowedOrigins = [
  CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:3000",
  "https://aploslogix.com",
  "https://www.aploslogix.com",
  "https://aploslogix.in",
  "https://www.aploslogix.in",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl) or matched origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true); // Permissive for website domain aliases
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser with 10kb size limit
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "API route not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[Aplos Logix Server] Backend running on port ${PORT}`);
});
