var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};


function testReturnsTheNoteText() {
  var note = new Note('message');
  assert.isTrue(note.returnText() == 'message');
};

testReturnsTheNoteText();
