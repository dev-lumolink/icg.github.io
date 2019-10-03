//меню в хедере
// $(window).on('click', function(e) {

//   if ( e.target.closest('.header__popup') === null && $('.header__popup').css('display') == 'block' ) {
//     if ( !$('.header__burger').is(e.target) ) {
//       $('.header__popup').slideToggle();
//     }    
//   }  

//   if ( e.target.closest('.header__search')===null && e.target != $('.search__popup') && e.target.closest('.search__popup') === null && $('.search__popup').css('display') == 'block' ) {
//     $('.search__popup').slideToggle();
//   }  
 
// })

$('.header__burger').on('click', function(e) {
  e.preventDefault();
    $('.header__popup').slideToggle();
})

$('.header__close').on('click', function(e) {
  e.preventDefault();
  $('.header__popup').slideToggle();
})

//выпадашка поиска
$('.header__search').on('click', function(e) {
  e.preventDefault();
  if (($(".header__popup").css('display') == 'block') && ($(".search__popup").css('display') == 'none') ){
      $('.search__popup').slideToggle();
  } else {
    if ( e.target != $('.search__popup') && e.target.closest('.search__popup') === null ) {
      $('.search__popup').slideToggle();
    }    
  }
  $('#search__field').focus();
})

//слайдер брендов
$(".brends__list").owlCarousel({
  loop: true,
  nav: false,
  margin: 16,
  responsive: {
    320: {
      items: 1
    },
    640: {
      items: 3
    },
    960: {
      items: 6
    }
  }
});

//переключатель checkbox в блоке Свяжитесь с нами

$(".contacts__personal").on('click', function(e) {
  e.preventDefault();
  var decorCheckbox = $(this).find(".form__checkmark"),
      mainCheckbox = $(this).find(".form__checked");


  if ( decorCheckbox.hasClass("form__checkmark--checked") ) {
    decorCheckbox.removeClass("form__checkmark--checked");
    mainCheckbox.prop('checked', false);
    $(this).siblings('.mainbtn').addClass('disabled');

  } else {
    decorCheckbox.addClass("form__checkmark--checked");
    mainCheckbox.prop('checked', true);
    $(this).siblings('.mainbtn').removeClass('disabled');
  }
})

//phone mask в блоке Свяжитесь с нами

function checkPhone() {
  var pattern = /\+\s\d{1}\s\d{3}\s\d{3}\-\d{2}\-\d{2}/;
  var phone = $('.contacts__field--phonemask');
  
  phone.blur(function(){
    if($(this).val() != ''){
    if($(this).val().search(pattern) == 0){
      $(this).removeClass('error');
      
    } else {
      $(this).addClass('error');
    }
    }else{
      $(this).addClass('error');
    }
  });

  phone.focus(function() {
    $(this).removeClass('error');
  })
}

$(document).ready(function(){
  checkPhone();
});

$(function() {
  $('.contacts__field--phonemask').mask("+ 9 999 999-99-99", {autoclear: false});
});

//валидация email

$(document).ready(function(){
  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $('input[type="email"]');
  
  mail.blur(function(){
    if(mail.val() != ''){
    if(mail.val().search(pattern) == 0){
    mail.removeClass('error');
    } else {
    mail.addClass('error');
    }
    }else{
    mail.addClass('error');
    }
  });

  mail.focus(function() {
    mail.removeClass('error');
    
  })
});

// wiedemann scripts start here. Code above is not mine
// events slider
$(document).ready(function(){
  $('[data-slider="events"]').owlCarousel({
    loop: false,
    responsive: {
      320: {
        items: 1,
        touchDrag: true,
        mouseDrag: true
      },
      640: {
        items: 2,
        margin: 30,
        touchDrag: false,
        mouseDrag: false
      }
    }
  });
  // popular news slider
  $('[data-slider="popular-news"]').owlCarousel({
    loop: false,
    responsive: {
      320: {
        items: 1,
        touchDrag: true,
        mouseDrag: true
      },
      640: {
        items: 3,
        margin: 30,
        touchDrag: true,
        mouseDrag: true
      },
      960: {
        items: 6,
        touchDrag: false,
        mouseDrag: false
      }
    }
  });
})