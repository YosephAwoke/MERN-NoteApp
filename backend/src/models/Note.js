import mongoose from "mongoose";

// Define the schema for the Note model
// This schema defines the structure of the Note documents in the MongoDB database
// It includes fields for title and content, both of which are required
// The timestamps option automatically adds createdAt and updatedAt fields to the documents

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
