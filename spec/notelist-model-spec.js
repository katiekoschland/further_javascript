


function testNoteListHasEmptyArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0);
};

function testNoteListCreateAndStoreNotes() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  assert.isTrue(noteList.list.length === 1);
}

function testReturnListOfNotes() {
  var noteList = new NoteList();
  noteList.createNote("Hello");
  assert.isTrue(noteList.returnList() === noteList.list);
  i
}
