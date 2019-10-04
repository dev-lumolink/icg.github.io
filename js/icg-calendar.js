var ICG_CALENDAR = function(node, params){
    this.calendar = document.getElementById(node);
    this.params = params;

    this.cities = {
        select: Object,
        values: []
    };
    this.directions = {
        list: Object,
        items: []
    };
    this.events = [];

    // methods
    this.node = function(node){
        return document.querySelector(node);
    };
    this.nodes = function(nodes){

    };
    this.destroyEvents = function(){
        $(this.events).each(function(i, e){
            $(e).owlCarousel('destroy')
        })
    };
    this.setCarousel = function(node){
        $(node).find('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true
        })
    };
    this.showCarousel = function(node){
        $(node).show();
    };
    this.hideCarousel = function(node){
        $(node).hide();
    };
    this.setCity = function(city){
        if (city !== "all") {
            $(this.directions.items).each(function(i, d){
                $(d).toggle({
                    duration: 0,
                    easing: "linear",
                    complete: function(){
                        $('[data-city="' + city + '"]').show(0);
                    }
                });
            })
        } else {
            $(this.directions.items).each(function(i, d){
                $(d).show(0);
            })
        }
    }

    this.init = function(){
        var that = this;

        if (this.calendar) {
            this.cities.select      = this.calendar.querySelector('[data-entity="cities"]');
            this.cities.values      = this.calendar.querySelectorAll('[data-entity="cities"]');
            this.directions.list    = this.calendar.querySelector('[data-entity="directions"]');
            this.directions.items   = this.calendar.querySelectorAll('[data-entity="direction"]');
            this.events             = this.calendar.querySelectorAll('[data-entity="events"]');

            // this.setCarousel(this.events[0]);

            $(this.cities.select).on('change', function(){
                var city = $(this).find('option:selected').val();
                that.setCity( city );
            });

            $(this.directions.items).on('click', function(){
                var carousel = $('[data-entity="events"][data-city="' + $(this).data('city') + '"]');
                $(that.events).each(function(i, e){
                    e.toggle({
                        duration: 0,
                        easing: 'linear',
                        complete: function(){
                            that.showCarousel( carousel )
                            that.setCarousel( carousel )
                        }
                    })
                })
            });
        }
    };

    // start
    this.init();
}

document.addEventListener('DOMContentLoaded', function(){
    window.icg_calendar = new ICG_CALENDAR('icg-calendar', {})
})