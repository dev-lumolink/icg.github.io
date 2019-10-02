function mapsInit() {
    $(function() {
        ymaps.ready(init);
        var myMap;
        var coords = [59.946324, 30.347543];
    
    
        function init(){
            myMap = new ymaps.Map("map1", {
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

            window.addEventListener("orientationchange", function() {
                setTimeout(function() {
                 myMap.container.fitToViewport();
                }, 1000)
               
             }, false);
            
        }

    });
    
    $(function() {
        ymaps.ready(init);
        var myMap;
        var coords = [55.739559, 37.507340];
    
    
        function init(){
            myMap = new ymaps.Map("map2", {
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

            window.addEventListener("orientationchange", function() {
                setTimeout(function() {
                 myMap.container.fitToViewport();
                }, 1000)
               
             }, false);
    
        }
    });
    
    $(function() {
        ymaps.ready(init);
        var myMap;
        var coords = [56.853808, 60.644070];
    
    
        function init(){
            myMap = new ymaps.Map("map3", {
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

            window.addEventListener("orientationchange", function() {
                setTimeout(function() {
                 myMap.container.fitToViewport();
                }, 1000)
               
             }, false);
    
        }
    });
}

$(document).ready(function() {
    mapsInit();
})


$(function() {
    ymaps.ready(init);
    var myMap;
    var coords = [56.853808, 60.644070];


    function init(){
        myMap = new ymaps.Map("mapDealer", {
            center: coords,
            zoom: 14,
            controls: []
        });

        placeMark = new ymaps.Placemark(coords, {
            //balloonContent: 'Адрес аптеки',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icons/checkmark.svg',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
        });

        myMap.geoObjects.add(placeMark);

        placeMark.events.add('click', function(e) {


            var placemark = new ymaps.Placemark(coords, {
            // Зададим содержимое заголовка балуна.
            balloonContentHeader: '<div class="map__city">Екатеринбург</div>',
            // Зададим содержимое основной части балуна.
            balloonContentBody: '<div class="map__text">ООО "Соло"</div><div class="map__text">344000, Буденновский пр., дом №61/12</div><div class="map__text">Тел: (863) 263-71-10</div><div class="map__text">Тел: (863) 555-45-34</div><div class="map__text">E-mail: soloros@rambler.ru</div>',
            // Зададим содержимое нижней части балуна.
            //balloonContentFooter: '<button class="adress__button">Выбрать</button>',
            // Зададим содержимое всплывающей подсказки.
            hintContent: ''
            });
            // Добавим метку на карту.
            myMap.geoObjects.add(placemark);
            // Откроем балун на метке.
            placemark.balloon.open();

            placemark.events.add('balloonclose', function(e) {
                    myMap.geoObjects.remove(placemark);
                    placemark = null;

            });

        })

    }
});

