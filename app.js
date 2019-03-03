console.log("Starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const titleoptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
}


const notes = require('./notes.js');
const argv = yargs
.command('add','Add a new note',{
  title:titleoptions,
  body:bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{  title:titleoptions})
.command('remove','Remove a note',{  title:titleoptions})
.help()
.argv;

var command = argv._[0]

//Adding note here
if(command === 'add'){
  var note =notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  }else {
    console.log("Duplicate Note ");
  }
//Listing out all the notes here
}else if(command === 'list') {
  var allnotes =notes.getAll();
  console.log(`Priting ${allnotes.length} note(s).`);
  allnotes.forEach((note) => {
    notes.logNote(note);
  }) ;

  //Removing all the notes here
}else if(command === 'remove') {
  var noteremoved =notes.removeAll(argv.title);
  var message = noteremoved ? 'Note was removed' : `Note was not found`;
  console.log(message);
  // Reading all the noets here
}else if(command === 'read') {
  var note = notes.readAll(argv.title);
  if (note) {
    console.log('Note Found');
    notes.logNote(note);
  }else {
    console.log('Note not found');
  }

}else {
  console.log('Command not recognized');
}
