function calcSlider() {
  var i = $(".news__section .news__scroll .news__item").length;
  if ( $(window).width() >= 650 ) {   

   $(".news__section .news__scroll").css('width', i*50 + '%');

   setTimeout(function() {
    $('.news__section .news__outer').css('height', $('.news__section .news__item').height() + 40 + 'px');
   }, 300)

   scrollToMonth( $(".news__section .news__month--active").index() );   
  }
  
    else {
      $(".news__section .news__scroll").css('width', '');
      $(".news__section .news__scroll").css('left', '');
      $('.news__section .news__outer').css('height', '');
    }
  
 }

function calcSliderPopular() {
  var i = $(".news__popular .news__scroll .news__one").length;
  
  if ( $(window).width() >= 900 ) {  


      $(".news__popular .news__scroll").css('width', i*16.67 + '%');

      setTimeout(function() {
        $('.news__popular .news__container').css('height', $('.news__popular .news__list').height() + 40 + 'px');
      }, 300)

      scrollToMonthPopular( $(".news__popular .news__month--active").index() );   
  }

  else if ( $(window).width() >= 650 && $(window).width() < 900 ) {
    $(".news__popular .news__scroll").css('width', i*25 + '%');

    setTimeout(function() {
      $('.news__popular .news__container').css('height', $('.news__popular .news__list').height() + 40 + 'px');
    }, 300)

    scrollToMonthPopular( $(".news__popular .news__month--active").index() );   
  }

      else {
          $(".news__popular .news__scroll").css('width', '');
          $(".news__popular .news__scroll").css('left', '');
          $('.news__popular .news__outer').css('height', '');
      }
}


// $(window).resize(function() {
//     calcSlider();
//     calcSliderPopular();
//     calcPage();
//   })

  function scrollToMonth(i) {
    var list = $(".news__section .news__scroll");
    list.css('left', -i*100 + '%');
}

function scrollToMonthPopular(i) {
  var list = $(".news__popular .news__scroll");
  var items = $('.news__popular .news__one');

  if ( $(window).width() >= 900 ) {

    

    list.css('left', -i*100 + '%');

    
    for (var j=0; j<items.length; j++) {
      items.eq(j).css('opacity', '0');
    }


    for (var j=i*6; j < (i+1)*6; j++) {
      items.eq(j).css('opacity', '1');
    }
  }

  else if ( $(window).width() < 900 && $(window).width() >= 650) {

    list.css('left', -i*150 + '%');
    

    for (var j=0; j<items.length; j++) {
      items.eq(j).css('opacity', '0');
    }
  
    for (var j=i*6; j < i*6+4; j++) {
      items.eq(j).css('opacity', '1');
    }
  }
  
}


$(".news__section .news__month").on('click', function(e) {
   e.preventDefault();

   $(this).addClass("news__month--active");
   $(this).siblings().removeClass("news__month--active");

   scrollToMonth($(this).index());
   
})

$(".news__popular .news__month").on('click', function(e) {
  e.preventDefault();

  $(this).addClass("news__month--active");
  $(this).siblings().removeClass("news__month--active");

  scrollToMonthPopular($(this).index());
  
})

function calcPage() {
  $(function() {
    var owl = $('.news__section .news__outer .owl-carousel'),
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
              owl.find('.news__section .owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
          
    });
  
    calcSlider();
  });

  $(function() {
    var owl = $('.news__popular .news__outer .owl-carousel'),
        owlOptions = {
            loop: false,
            nav: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },

                350: {
                  items: 2,
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
              owl.find('.news__popular .owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
  
        
    });
  
    calcSliderPopular();
  });
}

  $(document).ready(function() {
    calcSliderPopular();
    calcSlider();
    calcPage();
})

$(window).resize(function() {
  setTimeout(function() {
    
    calcPage();
    calcSlider();
    calcSliderPopular();
  }, 1000)
  
})
