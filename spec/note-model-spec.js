function testReturnsTheNoteText() {
  var note = new Note('message');
  assert.isTrue(note.returnText() == 'message');
};

testReturnsTheNoteText();
