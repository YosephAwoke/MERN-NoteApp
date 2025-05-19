
import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.get("/api/notes", (req, res) => {
  res.send("Hello from the serverr");
});



app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});

