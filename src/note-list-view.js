(function(exports) {

  function NoteListView(notes = new NoteList()) {
    this.notes = notes;
  }

  NoteListView.prototype.convertToHTML = function() {
    var list = '<ul>'
    for(var i = 0; i < this.notes.list.length; i ++) {
      list += '<li><div>' + this.notes.list[i].text + '</div></li>';
    }
    return list + '</ul>'
  }


  exports.NoteListView = NoteListView;

})(this);

//helper function recommended by Mary to tidy lines 7-13!
