//Modules
const fs = require('fs');

//Utility Functions
const getNotesFromDb = () => {
  let retrieveNotes = fs.readFileSync('notes-db.json');
  retrieveNotes = JSON.parse(retrieveNotes);
  return retrieveNotes;
}

const sendNotesToDB = (notes) => {
  fs.writeFileSync('notes-db.json', JSON.stringify(notes));
};

//Program
const addNote = (title, body) => {
  let notes = getNotesFromDb();
  let note = {
    title,
    body
  }

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    sendNotesToDB(notes);
    return note;
  }
};

const removeNote = (title) => {
  let notes = getNotesFromDb();
  let updatedNotes = notes.filter((note) => note.title !== title);
  sendNotesToDB(updatedNotes);

  return notes.length !== updatedNotes.length;
};

const fetchNote = (title) => {
  let notes = getNotesFromDb();
  let note = notes.filter((note) => note.title === title);
  return note[0];
};

const fetchAll = () => getNotesFromDb();

const changeNote = (title, text) => {
  let notes = getNotesFromDb();

  let change = 0;
  for (let note of notes) {
    if (note.title === title) {
      note.body = text;
      change++;
    }
  }

  sendNotesToDB(notes);

  return change; 
};

const uiMessage = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  removeNote,
  fetchNote,
  fetchAll,
  changeNote,
  uiMessage
};
