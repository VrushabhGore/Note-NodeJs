console.log("Starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;

var command = argv._[0]
console.log("Command: "+ command);
console.log('Yargs', argv);
var print

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
  notes.getAll(argv.title, argv.body);

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
