function NoteController( notelist ){
  notelist.createNote( "Favourite Colour: red")
  var notelistview = new NoteListView(notelist)

  document.getElementById('app').innerHTML = notelistview.convertToHTML()

};
