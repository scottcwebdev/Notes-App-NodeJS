//Modules
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
const userInput = argv._[0];

if (userInput === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note added successfully!');
    notes.uiMessage(note);
  } else {
    console.log('Note not added...');
  }
}

else if (userInput === 'remove') {
  let note = notes.removeNote(argv.title);
  if (note) {
    console.log('Note removed successfully');
  } else {
    console.log('Sorry, note not removed');
  }
}

else if (userInput === 'fetch') {
  let note = notes.fetchNote(argv.title);
  if (note) {
    console.log('Fetching note...');
    notes.uiMessage(note);
  } else {
    console.log('Sorry, note not found');
  }
}

else if (userInput === 'fetchAll') {
  let allNotes = notes.fetchAll();
  console.log(allNotes);
}

else if (userInput === 'change') {
  let note = notes.changeNote(argv.title, argv.text);
  if (note) {
    console.log('Note successfully changed!');
  } else {
    console.log('Sorry, note not found');
  }
}

else {
  console.log('Command not found');
}
