// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
  var loaded = document.getElementsByClassName('container-fluid');
  if (loaded){
    //loaded.addEventListener("load", function(){
      //console.log(loaded + "AAA")
      //$('#dataTable').DataTable();
    //})
    //window.addEventListener('DOMContentLoaded', (event) => {
      //console.log('DOM fully loaded and parsed');
  //});
  }
});
