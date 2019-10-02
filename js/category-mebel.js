$(document).ready(function() {

    $(".service__slider").owlCarousel({
 
       items : 1,
        nav:true,
        loop:true,
        margin: 0
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]
 
    });

    $(".mebel__items").owlCarousel({
 
        items : 1,
         nav:true,
         loop:true,
         margin: 0
         //itemsDesktop : [1199,3],
         //itemsDesktopSmall : [979,3]
  
     });
 
  })

  $('.mebel__filter').on('click', function(e) {
      e.preventDefault();

      var checkmark = $(this).find('.form__checkmark'),
            button = $(this).find('input');

      if ( checkmark.hasClass('form__checkmark--checked') ) {
        checkmark.removeClass('form__checkmark--checked');
        button.prop('checked', false);
         
      } else {
        checkmark.addClass('form__checkmark--checked');
        button.prop('checked', true);
      }
  })

  $('.mebel__clear').on('click', function(e) {
    e.preventDefault();
    var checkmarks = $('.form__checkmark'),
    buttons = $('.mebel__choosed input');

    for (var i=0; i<checkmarks.length; i++ ) {
        checkmarks.eq(i).removeClass('form__checkmark--checked');
    }

    for (var i=0; i<buttons.length; i++ ) {
        buttons.eq(i).prop('checked', false);
    }
  })

  $('.mebel__all').on('click', function(e) {
    e.preventDefault();
    var checkmarks = $('.form__checkmark'),
    buttons = $('.mebel__choosed input');

    for (var i=0; i<checkmarks.length; i++ ) {
        checkmarks.eq(i).addClass('form__checkmark--checked');
    }

    for (var i=0; i<buttons.length; i++ ) {
        buttons.eq(i).prop('checked', true);
    }
  })