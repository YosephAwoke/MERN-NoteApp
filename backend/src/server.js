import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
// import bodyParser from "body-parser";
// import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from this origin
  
}));
app.use(express.json()); // Parse JSON bodies
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

app.get("/api/notes", (req, res) => {
  res.send("Hello from the serverr");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
