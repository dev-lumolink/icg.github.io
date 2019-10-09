$(document).ready(function ($) {
  // calendar widget
  if (window.wiedemann_data_parser) {
    window.wiedemann_data_parser.jqFetch('js/events.json', function (data) {
      window.wiedemann_calendar_widget = new WIEDEMANN_CALENDAR_WIDGET({
        widget: 'calendar-widget',
        defaultState: {
          eventID: '9'
        }
      }).init(data)
    })
  };
  // fixed header
  $(window).on('scroll', function () {
    if (window.pageYOffset > 200) {
      $('body').addClass('fixed');
    } else {
      $('body').removeClass('fixed')
    }
  })
  // event slider
  var eventsSlider = $('[data-slider="events"]').owlCarousel({
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
  var popularNewsSlider = $('[data-slider="popular-news"]').owlCarousel({
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
  var bannerSlider = $(".banner__wrapper").owlCarousel({
    autoPlay: 8000,
    items: 1,
    loop: true,
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
  //слайдер брендов
  var brandSlider = $(".brends__list").owlCarousel({
    loop: true,
    nav: false,
    margin: 16,
    responsive: {
      320: {
        items: 2,
        center: true,
        margin: 10
      },
      640: {
        items: 3
      },
      960: {
        items: 6
      }
    }
  });
  if ($('.sales-courses__list .sales-courses__item').length > 1) {
    var coursesSlider = $(".sales-courses__list").owlCarousel({
      items: 2,
      nav: true,
      loop: false,
      margin: 30,

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
    $('.sales-courses__list').css('justify-content', 'center');
    var courseslider = $(".courses__slider").owlCarousel({
      items: 1,
      loop: true,
      nav: true
    });
  }
  var serviceSlider = $(".service__slider").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 0
  });
  var mebelSlider = $(".mebel__items").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 0
  });
  var newsSlider = $('.news__scroll').owlCarousel({
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: '1',
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      1024: {
        items: 2
      },
      320: {
        items: 1
      }
    }
  })
  // responsive sliders
  // function calcNav() {
  //   var height = $('.courses__calendar .datepicker').height();
  //   $('.courses__list .owl-nav').css('bottom', height + 10 + 'px');
  // }

  // function calcSlider() {
  //   var i = $(".news__scroll .news__item").length;
  //   if ($(window).width() >= 650) {

  //     $(".news__scroll").css('width', i * 50 + '%');

  //     setTimeout(function () {
  //       $('.news__outer').css('height', $('.news__item').height() + 40 + 'px');
  //     }, 300)

  //     scrollToMonth($(".news__month--active").index());
  //   } else {
  //     $(".news__scroll").css('width', '');
  //     $(".news__scroll").css('left', '');
  //     $('.news__outer').css('height', '');
  //   }

  // }
  // calcPage();
  // if ($(window).width() <= 650) {
  //   calcNav();
  //   calcSlider();
  // } else {
  //   //calcSlider();
  // }

  function scrollToMonth(i) {
    var screen = $("news__outer");
    var list = $(".news__scroll");

    list.css('left', -i * 100 + '%');
  }
  $(".news__month").on('click', function (e) {
    e.preventDefault();
    $(this).addClass("news__month--active");
    $(this).siblings().removeClass("news__month--active");
    // scrollToMonth($(this).index());
    $('.news__scroll').trigger('to.owl.carousel', [$(this).data('hash')])
  });
  $('.service__title').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() <= 650) {
      if ($(this).hasClass('service__title--active')) {
        $(this).removeClass('service__title--active');
      } else {
        $(this).addClass('service__title--active');
      }
      $(this).siblings('.service__info').slideToggle(100);

    }
  })

  // function calcPage() {
  //   $(function () {
  //     var owl = $('.news__outer .owl-carousel'),
  //       owlOptions = {
  //         loop: false,
  //         nav: false,
  //         margin: 10,
  //         responsive: {
  //           0: {
  //             items: 1
  //           }
  //         }
  //       };

  //     if ($(window).width() <= 650) {
  //       var owlActive = owl.owlCarousel(owlOptions);
  //     } else {
  //       owl.addClass('off');
  //     }

  //     $(window).resize(function () {
  //       if ($(window).width() <= 650) {
  //         if (owl.hasClass('off')) {
  //           var owlActive = owl.owlCarousel(owlOptions);
  //           owl.removeClass('off');
  //         }
  //       } else {
  //         if (!owl.hasClass('off')) {
  //           owl.addClass('off').trigger('destroy.owl.carousel');
  //           owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
  //         }
  //       }
  //     });
  //     calcSlider();
  //   });
  // }

  // $(window).resize(function () {
  //   if ($(window).width() <= 650) {
  //     calcNav();
  //     calcSlider();
  //   } else {
  //     calcSlider();
  //   }
  //   calcPage();
  // })
  // burger
  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__popup').slideToggle();
  })
  $('.header__close').on('click', function (e) {
    e.preventDefault();
    $('.header__popup').slideToggle();
  })
  //выпадашка поиска
  $('.header__search').on('click', function (e) {
    e.preventDefault();
    if (($(".header__popup").css('display') == 'block') && ($(".search__popup").css('display') == 'none')) {
      $('.search__popup').slideToggle();
    } else {
      if (e.target != $('.search__popup') && e.target.closest('.search__popup') === null) {
        $('.search__popup').slideToggle();
      }
    }
    $('#search__field').focus();
  })
  //переключатель checkbox в блоке Свяжитесь с нами
  $(".contacts__personal").on('click', function (e) {
    e.preventDefault();
    var decorCheckbox = $(this).find(".form__checkmark"),
      mainCheckbox = $(this).find(".form__checked");


    if (decorCheckbox.hasClass("form__checkmark--checked")) {
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

    phone.blur(function () {
      if ($(this).val() != '') {
        if ($(this).val().search(pattern) == 0) {
          $(this).removeClass('error');

        } else {
          $(this).addClass('error');
        }
      } else {
        $(this).addClass('error');
      }
    });

    phone.focus(function () {
      $(this).removeClass('error');
    })
  }
  checkPhone();
  // validations
  $(function () {
    window.tel_1 = $('.phone-1').mask("+ 9 999 999-99-99", {
      autoclear: true
    });
    window.tel_2 = $('.phone-2').mask("+ 9 999 999-99-99", {
      autoclear: true
    });
  });

  var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  var mail = $('input[type="email"]');

  mail.blur(function () {
    if (mail.val() != '') {
      if (mail.val().search(pattern) == 0) {
        mail.removeClass('error');
      } else {
        mail.addClass('error');
      }
    } else {
      mail.addClass('error');
    }
  });
  mail.focus(function () {
    mail.removeClass('error');
  })
  //form tel toggle
  var requiredFields = function () {
    $('.contacts__form').find('.phone-2').attr('required', '');
    $('.contacts__form').find('input[type="email"]').attr('required', '');
    window.tel_1.unmask();
  };
  $('.phone-1').on('click focus', function () {
    $('.contacts__form').find('input').removeAttr('required');
    $('.contacts__form').find('input:not([type="submit"]):not(.phone-1)').each(function (i, input) {
      $(input).val('');
    })
  })
  $('.phone-1').on('blur focusout', function () {
    if ($(tel_1).val() === "") {
      requiredFields()
    } else return;
  })
  $(document).on('input change click focus focusout', function () {
    if ($('.contacts__form').find('[required]:valid')) $('.contacts__form input[type="submit"]').prop('disabled', false);
    if (!$('.contacts__form').find('[required]:valid')) $('.contacts__form input[type="submit"]').prop('disabled', true);
  });
  // courses
  $(".education__subject").on('click', function (e) {
    e.preventDefault();
    if ($(this).siblings(".education__content").css('display') == 'none') {
      $(this).find(".control").css('transform', 'rotate(180deg)');
    } else {
      $(this).find(".control").css('transform', 'rotate(0deg)');
    }
    $(this).siblings(".education__content").slideToggle();
  });
  // mebel
  $('.mebel__filter').on('click', function (e) {
    e.preventDefault();

    var checkmark = $(this).find('.form__checkmark'),
      button = $(this).find('input');

    if (checkmark.hasClass('form__checkmark--checked')) {
      checkmark.removeClass('form__checkmark--checked');
      button.prop('checked', false);

    } else {
      checkmark.addClass('form__checkmark--checked');
      button.prop('checked', true);
    }
  })

  $('.mebel__clear').on('click', function (e) {
    e.preventDefault();
    var checkmarks = $('.form__checkmark'),
      buttons = $('.mebel__choosed input');

    for (var i = 0; i < checkmarks.length; i++) {
      checkmarks.eq(i).removeClass('form__checkmark--checked');
    }

    for (var i = 0; i < buttons.length; i++) {
      buttons.eq(i).prop('checked', false);
    }
  })

  $('.mebel__all').on('click', function (e) {
    e.preventDefault();
    var checkmarks = $('.form__checkmark'),
      buttons = $('.mebel__choosed input');

    for (var i = 0; i < checkmarks.length; i++) {
      checkmarks.eq(i).addClass('form__checkmark--checked');
    }

    for (var i = 0; i < buttons.length; i++) {
      buttons.eq(i).prop('checked', true);
    }
  })
})