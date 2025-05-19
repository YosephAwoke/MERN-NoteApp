// This file contains the controller functions for handling notes-related requests
// in the Express application. Each function corresponds to a specific route and performs
// the necessary operations to handle the request and send a response back to the client.


import express from "express";
import { get } from "mongoose";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);


router.put("/:id", updateNote);

router.delete("/:id", deleteNote);


export default router;
