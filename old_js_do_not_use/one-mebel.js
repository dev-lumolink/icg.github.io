$(document).ready(function() {

    if ($('.sales__slider .offers__item').length > 1 ) {
        $(".sales__slider").owlCarousel({
 
            items : 2,
             nav:true,
             loop:false,
             margin: 30,
     
             responsive: {
                 0: {
     
                     items: 1,
                 },
     
                 750: {
                     items: 2,
                 }
             }
      
         });
    } else {
        $('.sales__slider').css('display', 'block');
    }   

})

$('.onemebel__photos .onemebel__pic').on('click', function(e) {
    e.preventDefault();
    var screen = $('.onemebel__big .onemebel__pic img');

    screen.attr('src', $(this).find('img').attr('src'));
    screen.attr('srcset', $(this).find('img').attr('srcset'));

})