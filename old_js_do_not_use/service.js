$(document).ready(function() {

    $(".service__slider").owlCarousel({
 
       items : 1,
        nav:true,
        loop:true,
        margin: 0
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]
 
    });

    var tabs = $('.course__tab'),
        features = $('.service__tab');

    tabs.eq(0).addClass('course__tab--active');
    features.eq(0).css('display', 'block');
 
  })

  $('.service__tab .service__features').owlCarousel({
        items : 1,
        nav:false,
        loop:false,
        margin: 30,
        responsive: {
          0: {
            items: 1,
          },

          750: {
            items: 2,
          },

          950: {
            items: 3,
          }
        }
  })

  $('.service__addresses-list').owlCarousel({
    items : 3,
    nav:false,
    loop:false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },

      650: {
        items: 2,
      },

      950: {
        items: 3,
      }
    }
})



  $('.service__tab').css('display', 'none');

$(".service__choice .course__tab").on('click', function(e) {
    e.preventDefault();
    $(this).addClass("course__tab--active");
    $(this).siblings().removeClass("course__tab--active");
    var i=$(this).index(),
        list=$(".service__choice .service__tab");

   for (var j=0; j<list.length; j++) {
        list.eq(j).css('display', 'none');
   }

   
   $(".service__choice .service__tab").eq(i).css('display', 'block');

    
 })

