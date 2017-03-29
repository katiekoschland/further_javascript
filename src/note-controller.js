(function(exports){
  function NoteController( notelist ){
    notelist.createNote( "Favourite Colour: red")
    var notelistview = new NoteListView(notelist)

    NoteController.prototype.generateHTML = function () {
      document.getElementById('app').innerHTML = notelistview.convertToHTML()
    };
  };
  exports.NoteController = NoteController
})(this)
