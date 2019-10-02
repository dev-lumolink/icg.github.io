$(document).ready(function() {

    $(".banners__slider").owlCarousel({
 
       items : 1,
        nav:true,
        loop:true,
        margin: 0
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]
 
    });

    if ($('.sales__slider .offers__item').length > 1) {
      $(".sales__slider").owlCarousel({
 
        items : 2,
         nav:true,
         loop:false,
         margin: 30,
         //itemsDesktop : [1199,3],
         //itemsDesktopSmall : [979,3]

         responsive: {
           0: {
             items: 1,
           },

           850: {
             items: 2,
           }
         }
  
     });
    } else {
      $('.sales__slider').css('display', 'block');
    }

    if ( $('.reviews__slider .reviews__item').length > 1 ) {
      $(".reviews__slider").owlCarousel({
 
        items : 2,
         nav:true,
         loop:false,
         margin: 30,

         responsive: {
          0: {
            items: 1,
          },

          850: {
            items: 2,
          }
        }
         //itemsDesktop : [1199,3],
         //itemsDesktopSmall : [979,3]
  
     });
    } else {
      $('.reviews__slider').css('display', 'block');
    }

    

     

     
 
  })