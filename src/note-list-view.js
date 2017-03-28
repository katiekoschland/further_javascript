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



// <ul><li><div>Favourite food: pizza</div></li><li><div><li><div>Favourite drink: diet coke</div></li></ul>
