$( function() {
    
    $( "#datepicker" ).datepicker({
      numberOfMonths: 2,
      
    });
    var tab_pressed = 0;

  $('#datepicker').blur(function () {

      setTimeout(function () {

          if (tab_pressed == 1)

              $('#datepicker').datepicker("hide");

          tab_pressed = 0;

      }, 300);

  });

  $('#datepicker').keydown(function (event) {

      if (event.which == 9)

          tab_pressed = 1;

  });





  } );
  