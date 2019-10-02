$('.datepicker-here').datepicker( {
    toggleSelected: false,
    language: 'ru',

    navTitles: {
     days: 'MM',
   },
 });

 function calcNav() {
  var height = $('.courses__calendar .datepicker').height();
  $('.courses__list .owl-nav').css('bottom', height + 10 + 'px');

}


 $(".education__subject").on('click', function(e) {

    e.preventDefault();

     if ( $(this).siblings(".education__content").css('display') == 'none') {
       $(this).find(".control").css('transform', 'rotate(180deg)');
    } else {
       $(this).find(".control").css('transform', 'rotate(0deg)');
    }

     $(this).siblings(".education__content").slideToggle();   
     

 })

 $(document).ready(function() {  

  if ( $('.sales-courses__list .sales-courses__item').length > 1 ) {
    $(".sales-courses__list").owlCarousel({

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
    $('.sales-courses__list').css('justify-content', 'center');
    //$('.sales-courses__list').css('width', '50%');
  }

     

   

   $(".courses__slider").owlCarousel({
 
    //autoPlay: 8000, //Set AutoPlay to 8 seconds
  
    items : 1,
    loop:true,
    nav:true,
    //itemsDesktop : [1199,3],
    //itemsDesktopSmall : [979,3]
  });    
  
  //calcNav(); 

 })


$(window).resize(function() {

    //calcNav();

})





