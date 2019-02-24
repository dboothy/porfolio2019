


$( document ).ready(function() {
    console.log( "ready!" );



$( ".collapsible div" ).mouseover(function() { $(this).trigger('click'); });

$('.tooltipped').tooltip();




});

  document.addEventListener('DOMContentLoaded', function() {


    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  
      
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
  });



  
        