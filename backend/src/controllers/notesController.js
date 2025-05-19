export function getNotes(req, res) {
  res.status(200).send("The notes are fetched from the server");
}

export function createNote(req, res) {
  res.status(201).send("The note is created successfully");
}

export function updateNote(req, res) {
  res.status(200).send("The note is updated successfully");
}

export function deleteNote(req, res) {
  res.status(200).send("The note is deleted successfully");
}