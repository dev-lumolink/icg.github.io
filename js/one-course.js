$(function() {
    var tabs = $('.course__tab'),
        desc = $('.course__desc');

    $('.course__tab').on('click', function(e) {
        e.preventDefault();

        var clickedTab = $(this);
        


        var i = $(this).index();
        if ( !clickedTab.hasClass('course__tab--active') ) {
            clickedTab.addClass('course__tab--active');
            clickedTab.siblings().removeClass('course__tab--active');

            var desc = $('.course__desc');

            desc.eq(i).addClass('course__desc--active');
            desc.eq(i).siblings().removeClass('course__desc--active');


            
            


        }
    })
})