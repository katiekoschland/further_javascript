(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.createNote = function(note) {
    this.list.push(new Note(note));
  }

  NoteList.prototype.returnList = function() {
    return this.list;
  }



  exports.NoteList = NoteList;

})(this);
