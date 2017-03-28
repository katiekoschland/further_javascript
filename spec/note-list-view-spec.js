//

// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note list view object that can be instantiated.
// Has a method that, when called, returns a string of HTML that represents the note list model. For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.


function testNoteListViewTakesANoteOnInstantiation() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.notes === noteList);
};

function testNoteListViewCreatesHTMLList() {
  var noteList = new NoteList();
  noteList.createNote("Favourite food: pizza")
  noteList.createNote("Favourite drink: diet coke")
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.convertToHTML() === '<ul><li><div>Favourite food: pizza</div></li><li><div>Favourite drink: diet coke</div></li></ul>');
};

testNoteListViewTakesANoteOnInstantiation();
testNoteListViewCreatesHTMLList();
