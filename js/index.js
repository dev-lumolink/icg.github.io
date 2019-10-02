function calcNav() {
  var height = $('.courses__calendar .datepicker').height();
  $('.courses__list .owl-nav').css('bottom', height + 10 + 'px');

}

function calcSlider() {
  var i = $(".news__scroll .news__item").length;
  if ( $(window).width() >= 650 ) {   

   $(".news__scroll").css('width', i*50 + '%');

   setTimeout(function() {
    $('.news__outer').css('height', $('.news__item').height() + 40 + 'px');
   }, 300)

   scrollToMonth( $(".news__month--active").index() );   
  }
  
    else {
      $(".news__scroll").css('width', '');
      $(".news__scroll").css('left', '');
      $('.news__outer').css('height', '');
    }
  
 }
  
  $(document).ready(function() {

    calcPage();
    

    $(".banner__wrapper").owlCarousel({
 
        autoPlay: 8000, //Set AutoPlay to 8 seconds

        items : 1,
        loop:true,
        //nav:true,
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]

        responsiveClass: true,

        responsive: {
          0: {
            nav: false,
          },
  
          950: {
            nav: true,
          }
        }    
    });

    $(".courses__slider").owlCarousel({

      items : 1,
      loop:true,
      nav:true,
    });    


    

    $(".brends__list").owlCarousel({
 

      items : 6,
      loop:true,
      nav:false,
      margin: 16,
      center: true,
      autoWidth: true,

      responsive: {
        0: {
          items: 1,
          
        },

        650: {
          items: 2,
        },

        850: {
          items: 6,
          //loop: false,
          autoWidth: false,
          margin: 0,

        }
      }
    }); 

    if ( $(window).width() <= 650 ) {
      calcNav();
      calcSlider();
    } else {
      //calcSlider();
    }

  })

  
 $(window).resize(function() {
  if ( $(window).width() <= 650 ) {
    calcNav();
    calcSlider();
  }

  else {
    calcSlider();
  }
  calcPage();
})

  $('.datepicker-here').datepicker( {
    toggleSelected: false,
    language: 'ru',

    navTitles: {
     days: 'MM',
   },
 });


 function scrollToMonth(i) {
     var screen = $("news__outer");
     var list = $(".news__scroll");

     list.css('left', -i*100 + '%');
 }


 $(".news__month").on('click', function(e) {
    e.preventDefault();

    $(this).addClass("news__month--active");
    $(this).siblings().removeClass("news__month--active");

    scrollToMonth($(this).index());
    
 })

$('.service__title').on('click', function(e) {
  e.preventDefault();

  if ( $(window).width() <= 650 ) {
    if ( $(this).hasClass('service__title--active') ) {
      $(this).removeClass('service__title--active');
    } else {
      $(this).addClass('service__title--active');
    }
    $(this).siblings('.service__info').slideToggle(100);   
    
  }
})

function calcPage() {

  $(function() {
    var owl = $('.news__outer .owl-carousel'),
        owlOptions = {
            loop: false,
            nav: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                }
            }
        };
  
    if ( $(window).width() <= 650 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }
  
    $(window).resize(function () {
        if ($(window).width() <= 650) {
            if (owl.hasClass('off')) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if (!owl.hasClass('off')) {
              owl.addClass('off').trigger('destroy.owl.carousel');
              owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
  
        
    });
  
    calcSlider();
  });
}

