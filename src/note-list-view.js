(function(exports) {

  function NoteListView(notes = new NoteList()) {
    this.notes = notes;
  }

  NoteListView.prototype.convertToHTML = function() {
    console.log(this.notes.list)
    for(var i = 0; i < this.notes.length; i ++) {
      '<li><div>' + this.notes[i] + '</div></li>'
    }
  }

  exports.NoteListView = NoteListView;

})(this);


// <ul><li><div>Favourite food: pizza</div></li><li><div><li><div>Favourite drink: diet coke</div></li></ul>
