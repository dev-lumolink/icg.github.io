$('#dealer-btn').on('click', function(e) {
    e.preventDefault();

    $('#direction').css('display', 'none');
    $('#dealer').css('display', 'block');
})

$(document).ready(function() { 
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
})