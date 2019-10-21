$(document).ready(function() {

    $(".sales-page__slider").owlCarousel({
 
       items : 1,
        nav:true,
        loop:false,
        margin: 0
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]
 
    });

    $(".sales__news-list").owlCarousel({
 
      items : 3,
       nav:false,
       loop:false,
       margin: 30,

       responsive: {
         0: {
           items: 1,
         },

         550: {
           items: 2,
         },

         750: {
           items: 3,
         }
       }

   });
 
  })

  //переключатель checkbox в новостях и событиях

$(".sales__news-all").on('click', function(e) {
    e.preventDefault();
    console.log($(this));
  
  
    if ( $(this).hasClass("sales__news-all--checked") ) {
      $(this).removeClass("sales__news-all--checked");
      $('#sales-all').prop('checked', false);
  
    } else {
      $(this).addClass("sales__news-all--checked");
      $('#sales-all').prop('checked', true);
    }
  })