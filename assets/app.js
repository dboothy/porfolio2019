// var elem = document.querySelector('.tabs');
//      var options = {}
//      var instance = M.Tabs.init(elem, options);
//      console.log("something")
//      instance.open()



$( document ).ready(function() {
    console.log( "ready!" );



$( ".collapsible div" ).mouseover(function() { $(this).trigger('click'); });




});





  


  document.addEventListener('DOMContentLoaded', function() {


    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    // instances.open();
    // console.log("something")


    
  // var instance = M.Collapsible.getInstance(elem);

   // jQuery Method Calls
    // You can still use the old jQuery plugin method calls.
    // But you won't be able to access instance properties.

    // $('.collapsible').collapsible('methodName');
    // $('.collapsible').collapsible('methodName', paramName);
  
      
  });

