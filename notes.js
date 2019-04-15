console.log("Starting Notes");

const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString =fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
}

///This is the saved funtion initallized

var saveNote = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}
//This function is used to add note in the JSON file
var addNote = (title,body) => {
  var notes =fetchNotes();
  var note = {
    title,
    body
  };

  var duplicatesNotes = notes.filter((note) => note.title === title);

  if (duplicatesNotes.length == 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

var getAll= () =>{
return fetchNotes();
};
//This function reads a single note with the use of title
var readAll= (title) =>{
 var notes = fetchNotes();
 var filterednotes = notes.filter((note) => note.title === title);
 return filterednotes[0];
};

//This function removes a single note with the use of remove
var removeAll= (title) =>{
  var notes = fetchNotes();
  var filterednotes = notes.filter((note) => note.title != title);
  saveNote(filterednotes);
return notes.length != filterednotes.length;
};

var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title : ${note.title}`);
  console.log(`Body : ${note.body}`);
}
module.exports = {
  getAll: getAll,
  addNote: addNote,
  readAll: readAll,
  removeAll: removeAll,
  logNote: logNote
}
