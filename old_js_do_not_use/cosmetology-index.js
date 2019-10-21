$(document).ready(function() {

    $('.direction__list').owlCarousel({
        items : 3,
        nav:false,
        loop:false,
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
    })
})