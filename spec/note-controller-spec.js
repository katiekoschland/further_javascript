function testNoteControllerCanBeInstantiatied() {
  var notelist = new NoteList();
  var noteController = new NoteController(notelist);
  assert.isTrue(noteController instanceof NoteController)
}

runOneTest(testNoteControllerCanBeInstantiatied());
