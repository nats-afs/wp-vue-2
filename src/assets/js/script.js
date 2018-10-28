$(document).ready(function () {

  $(".button-collapse").sideNav();

  $('header nav .nav-wrapper .dropdown-button').dropdown({
        // inDuration: 300,
        // outDuration: 225,
        // constrainWidth: false, // Does not change width of dropdown to that of the activator
        // hover: true, // Activate on hover
        // gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        // alignment: 'left', // Displays dropdown with edge aligned to the left of button
        // stopPropagation: false // Stops event propagation
      }
    );

  $('.navbar-main .dropdown-button').dropdown({
        //hover: true, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
      }
    );

  $('#mobile-sidenav .dropdown-button').dropdown({
        // hover: false, // Activate on hover
        belowOrigin: true, // Displays dropdown below the button
      }
    );

  });