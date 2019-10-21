 $(document).ready(function() {

    $(".news__slider-wrapper").owlCarousel({
 
        items : 3,
        nav:true,
        loop:true,
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

    $('.news__popular .news__list').owlCarousel({
      items : 6,
        nav:false,
        loop:true,
        margin: 30,

        responsive: {
          0: {
            items: 2,
          },

          450: {
            items: 3,
          },

          650: {
            items: 4,
          },

          850: {
            items: 5,
          },

          950: {
            items: 6,
          }
        }
    })
 
  })