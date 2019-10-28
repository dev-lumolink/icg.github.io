jQuery(document).ready(function (jQuery) {
    window.calendar = new CALENDAR({
        el: '[data-entity="event-calendar"]'
    });
    // вот этот скрипт желательно запускать только на страницах с календарем мероприятий
        // calendar widget
    wiedemann_data_parser.jqFetch('classes/events.json', function (data) {
        new WIEDEMANN_CALENDAR_WIDGET({
            widget: 'calendar-widget'
        }).init(data)
    })
    // if (document.getElementById('datepicker')) {
    //         var arrayOfDates = [];
    //         jQuery.each(window.courseDates, function (index, dates) {
    //             var _dates = {
    //                 from: new Date(dates.from).getDate(),
    //                 to: new Date(dates.to).getDate()
    //             };
    //             var _month = {
    //                 from: new Date(dates.from).getMonth('numeric') + 1,
    //                 to: new Date(dates.to).getMonth('numeric') + 1
    //             };
    //             var _year = {
    //                 from: new Date(dates.from).getFullYear('numeric'),
    //                 to: new Date(dates.from).getFullYear('numeric')
    //             }
    //             var range = _dates.to - _dates.from;
    //             for (var i = _dates.from; i <= _dates.to; i++) {
    //                 arrayOfDates.push(new Date(_month.from + ' ' + i + ' ' + _year.from))
    //             }
    //         })
    //         var picker = new Datepicker('#datepicker', {
    //             within: (function () {
    //                 return arrayOfDates
    //             })(),
    //             multiple: true,
    //             separator: ', ',
    //             min: arrayOfDates[0],
    //             max: arrayOfDates[arrayOfDates.length - 1],
    //             yearRange: 0,
    //             weekStart: 1,
    //             onChange: function (date) {
    //                 jQuery('#number-of-courses').val(date.length);
    //                 jQuery('#dates-of-courses').val(date);
    //             }
    //         });
    // }
    // fixed header
    jQuery(window).on('scroll', function () {
        if (window.pageYOffset > 200) {
            jQuery('body').addClass('fixed');
        } else {
            jQuery('body').removeClass('fixed')
        }
    })
    // event slider
    var eventsSlider = jQuery('[data-slider="events"]').owlCarousel({
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
    var popularNewsSlider = jQuery('[data-slider="popular-news"]').owlCarousel({
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
    var bannerSlider = jQuery(".banner__wrapper").owlCarousel({
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
    var brandSlider = jQuery(".brends__list").owlCarousel({
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
                items: 4
            },
            1025: {
                items: 6
            }
        }
    });
    var serviceTabs = jQuery('.service__tab .service__features').owlCarousel({
        items: 1,
        nav: false,
        loop: false,
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
    var serviceAddresses = jQuery('.service__addresses-list').owlCarousel({
        items: 3,
        nav: false,
        loop: false,
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
    if (jQuery('.sales-courses__list .sales-courses__item').length > 1) {
        var coursesSlider = jQuery(".sales-courses__list").owlCarousel({
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
        jQuery('.sales-courses__list').css('justify-content', 'center');
        var courseslider = jQuery(".courses__slider").owlCarousel({
            items: 1,
            loop: true,
            nav: true
        });
    }
    var serviceSlider = jQuery(".service__slider").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 0
    });
    var mebelSlider = jQuery(".mebel__items").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 0
    });
    var newsSlider = jQuery('.news__scroll').owlCarousel({
        URLhashListener: true,
        autoplayHoverPause: true,
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
    var salesSlider = jQuery(".sales__slider").owlCarousel({
        items: 2,
        nav: true,
        loop: false,
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
    var newsSlider = jQuery(".news__slider-wrapper").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2,
            },
            850: {
                items: 3,
            }
        }
    });
    var cosmetologySlider = $('.direction__list').owlCarousel({
        items: 3,
        nav: false,
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },

            450: {
                items: 2,
            },

            650: {
                items: 3,
            }
        }
    });
    if (jQuery('.reviews__slider .reviews__item').length > 1) {
        jQuery(".reviews__slider").owlCarousel({
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
        jQuery('.reviews__slider').css('display', 'block');
    };
    // big brand slider
    var bigBrandSlider = jQuery('.slider--brand').find('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        autoHeight: true
    });
    var serviceSlider = jQuery(".service__slider").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 0
    });
    var salesPage = $(".sales-page__slider").owlCarousel({
        items : 1,
         nav:true,
         loop:false,
         margin: 0
     });
    var salesNews = $(".sales__news-list").owlCarousel({
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
    function scrollToMonth(i) {
        var screen = jQuery("news__outer");
        var list = jQuery(".news__scroll");
        list.css('left', -i * 100 + '%');
    }
    jQuery(".news__month").on('click', function (e) {
        e.preventDefault();
        jQuery(this).addClass("news__month--active");
        jQuery(this).siblings().removeClass("news__month--active");
        // scrollToMonth(jQuery(this).index());
        jQuery('.news__scroll').trigger('to.owl.carousel', [jQuery(this).data('hash')])
    });
    jQuery('.service__title').on('click', function (e) {
        e.preventDefault();
        if (jQuery(window).width() <= 650) {
            if (jQuery(this).hasClass('service__title--active')) {
                jQuery(this).removeClass('service__title--active');
            } else {
                jQuery(this).addClass('service__title--active');
            }
            jQuery(this).siblings('.service__info').slideToggle(100);
        }
    })
    // burger
    jQuery('.header__burger').on('click', function (e) {
        e.preventDefault();
        jQuery('.header__popup').slideToggle();
    })
    // menu close button
    jQuery('.header__close').on('click', function (e) {
        e.preventDefault();
        jQuery('.header__popup').slideToggle();
    })
    //выпадашка поиска
    jQuery('.header__search').on('click', function (e) {
        e.preventDefault();
        if ((jQuery(".header__popup").css('display') == 'block') && (jQuery(".search__popup").css('display') == 'none')) {
            jQuery('.search__popup').slideToggle();
        } else {
            if (e.target != jQuery('.search__popup') && e.target.closest('.search__popup') === null) {
                jQuery('.search__popup').slideToggle();
            }
        }
        jQuery('#search__field').focus();
    })
    //переключатель checkbox в блоке Свяжитесь с нами
    jQuery(".contacts__personal").on('click', function (e) {
        e.preventDefault();
        jQuery(this)
            .find('.form__checkmark')
            .toggleClass('form__checkmark--checked')
            .siblings('span')
            .toggleClass('form__form__checkmark--checked');
        jQuery('.contacts__btn').toggleClass('disabled');
    });
    // contact form
    jQuery(document).on('input change click focus focusout', function () {
        if (jQuery('.contacts__form').find('[required]:valid')) jQuery('.contacts__form input[type="submit"]').prop('disabled', false);
        if (!jQuery('.contacts__form').find('[required]:valid')) jQuery('.contacts__form input[type="submit"]').prop('disabled', true);
    });
    // courses
    jQuery(".education__title").on('click', function (e) {
        e.preventDefault();
        if (jQuery(this).parents('.education__area').find(".education__content").css('display') == 'none') {
            jQuery(this).siblings(".control").css('transform', 'rotate(180deg)');
        } else {
            jQuery(this).siblings(".control").css('transform', 'rotate(0deg)');
        }
        jQuery(this).parents('.education__area').find(".education__content").slideToggle();
    });
    // mebel
    jQuery('.mebel__filter').on('click', function (e) {
        e.preventDefault();
        var checkmark = jQuery(this).find('.form__checkmark'),
            button = jQuery(this).find('input');
        if (checkmark.hasClass('form__checkmark--checked')) {
            checkmark.removeClass('form__checkmark--checked');
            button.prop('checked', false);
        } else {
            checkmark.addClass('form__checkmark--checked');
            button.prop('checked', true);
        }
    });
    // mebel button clear
    jQuery('.mebel__clear').on('click', function (e) {
        e.preventDefault();
        var checkmarks = jQuery('.form__checkmark'),
            buttons = jQuery('.mebel__choosed input');
        for (var i = 0; i < checkmarks.length; i++) {
            checkmarks.eq(i).removeClass('form__checkmark--checked');
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons.eq(i).prop('checked', false);
        }
    });
    // mebel check all
    jQuery('.mebel__all').on('click', function (e) {
        e.preventDefault();
        var checkmarks = jQuery('.form__checkmark'),
            buttons = jQuery('.mebel__choosed input');
        for (var i = 0; i < checkmarks.length; i++) {
            checkmarks.eq(i).addClass('form__checkmark--checked');
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons.eq(i).prop('checked', true);
        }
    });
    // mebel photo click
    jQuery('.onemebel__photos .onemebel__pic').on('click', function (e) {
        e.preventDefault();
        var screen = jQuery('.onemebel__big .onemebel__pic img');
        screen.attr('src', jQuery(this).find('img').attr('src'));
        screen.attr('srcset', jQuery(this).find('img').attr('srcset'));
    });
    // course tabs
    var tabs = jQuery('.course__tab'),
        desc = jQuery('.course__desc');
    jQuery('.course__tab').on('click', function (e) {
        e.preventDefault();
        var clickedTab = jQuery(this);
        var i = jQuery(this).index();
        if (!clickedTab.hasClass('course__tab--active')) {
            clickedTab.addClass('course__tab--active');
            clickedTab.siblings().removeClass('course__tab--active');
            var desc = jQuery('.course__desc');
            desc.eq(i).addClass('course__desc--active');
            desc.eq(i).siblings().removeClass('course__desc--active');
        }
    });
    // popup
    jQuery('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });
    // get price button
    jQuery('[data-action="get-price"]').on('click', function (e) {
        e.preventDefault();
        var button = $(this);
        var body = jQuery("html, body");
        body.stop().animate({
            scrollTop: $('section.contacts').offset().top
        }, 500, 'swing', function () {
            $('section.contacts textarea').val($(button).data('product'))
        });
    });
    // service tabs
    var tabs = jQuery('.course__tab'),
        features = jQuery('.service__tab');
    tabs.eq(0).addClass('course__tab--active');
    features.eq(0).css('display', 'block');

    jQuery('.service__tab').css('display', 'none');
    jQuery(".service__choice .course__tab").on('click', function (e) {
        e.preventDefault();
        jQuery(this).addClass("course__tab--active");
        jQuery(this).siblings().removeClass("course__tab--active");
        var i = jQuery(this).index(),
            list = jQuery(".service__choice .service__tab");
        for (var j = 0; j < list.length; j++) {
            list.eq(j).css('display', 'none');
        }
        jQuery(".service__choice .service__tab").eq(i).css('display', 'block');
    });
    // map initial
    function mapsInit(coordinates, node) {
        jQuery(function () {
            ymaps.ready(init);
            var myMap;
            var coords = coordinates.split(',').reverse();

            function init() {
                myMap = new ymaps.Map(node, {
                    center: coords,
                    zoom: 14,
                    controls: []
                });
                var myGeoObject = new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: coords
                    }
                }, {
                    preset: 'islands#blackStretchyIcon',
                    draggable: true
                });
                myMap.geoObjects.add(myGeoObject);
                window.addEventListener("resize", function () {
                    setTimeout(function () {
                        myMap.container.fitToViewport();
                    }, 1000)
                }, false);
            }
        });
    };
    // replace picture of map with map
    jQuery('.service__addresses-item img').on('click', function () {
        jQuery(this).replaceWith('<div class="service__addresses-map" id="map' + jQuery(this).data('id') + '"></div>');
        mapsInit($(this).data('coords'), 'map' + jQuery(this).data('id'));
    });
    // tabs
    jQuery('.tabs > ul li a').on('click', function (e) {
        e.preventDefault();
        jQuery(this).parents('ul').find('a').removeClass('title--active');
        jQuery(this).addClass('title--active');
        jQuery('.tabs .tab').hide(0).parents('.tabs').find('.tab[data-tab="' + jQuery(this).data('tab') + '"]').show(0)
    });
    jQuery('.tabs .tab:first').show(0);
    // iwannabeadealer
    jQuery('#dealer-btn').on('click', function () {
        var button = $(this);
        var body = jQuery("html, body");
        body.stop().animate({
            scrollTop: $('section.contacts').offset().top
        }, 500, 'swing', function () {
            $('section.contacts #form-direction').val('Дилер')
        });
    });
    // edu_calendar click
    jQuery('#education-calendar').on('click', function () {
        var body = jQuery("html, body");
        body.stop().animate({
            scrollTop: $('section.courses').offset().top
        }, 500, 'swing');
    })
    // cta
    jQuery('[type=tel]').mask('+7 (999) 999-99-99');
    jQuery('.cta-button').on('click', function () {
        jQuery('.cta').toggleClass('cta--open').find('[type=tel]').focus();
    });
    jQuery('.cta').on('submit', function (e) {
        e.preventDefault();
        $(this).find('.cta__input').html('<strong>Ваша заявка отправлена. Мы свяжемся с Вами в ближайшее время.</strong>')
        setTimeout(function () {
            $(e.target).removeClass('cta--open');
        }, 2000)
    });
    // scrollbar in course
    jQuery(".course__desc").mCustomScrollbar({
        scrollInertia: 100
    });

    // courses tabs
    jQuery('.education__courses a').on('click', function (e) {
        e.preventDefault();
        jQuery(this).siblings().removeClass('education__name--active');
        jQuery('.education__tabs [data-type]').removeClass('education__areas--active');

        jQuery(this).addClass('education__name--active');
        jQuery('.education__tabs').find('[data-type="' + jQuery(this).data('type') + '"]').addClass('education__areas--active');
    });
    // 
    $(".sales__news-all").on('click', function (e) {
        e.preventDefault();

        if ($(this).hasClass("sales__news-all--checked")) {
            $(this).removeClass("sales__news-all--checked");
            $('#sales-all').prop('checked', false);

        } else {
            $(this).addClass("sales__news-all--checked");
            $('#sales-all').prop('checked', true);
        }
    })
})