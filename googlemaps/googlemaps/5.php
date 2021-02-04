<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Complex icons</title>
    <style>
        body {
            position: relative;
        }
        audio {
            position: absolute;
            left: 40%;
            bottom: 10px;
            z-index: 2;
            opacity: 0.5;
        }
        .head-good {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 2;
            opacity: 0.3;
        }
        .head-good h3 {
            text-transform: uppercase;
            text-align: center;
        }
        span {
            font-size: 40px;
        }
        #map {
            width: 100%;
            height: 100vh;
            background-color: grey;
        }
        .description {
            position: absolute;
            left: 1%;
            bottom: 10px;
            z-index: 2;
            opacity: 0.5;
        }
        .description ul li {
            overflow: hidden;
        }
        .description ul li img {
            float: left;
        }
        .description ul li img.circle {
            padding-top: 15px;
        }
        .description ul li p {
            float: left;
            padding-left: 10px;
        }
    </style>
</head>
<body>
<div class="head-good">
    <h3>Объекты <span>организации</span></h3>
</div>
<div class="description">
    <ul>
        <li><img src="boilerhouse.png" alt="boilerhouses"><p>Котельные</p></li>
        <li><img class="circle" src="circle.png" alt="dots"><p>Дома с тепловым счётчиками</p></li>
    </ul>
</div>
<audio controls autoplay>
    <source src="music.mp3" type="audio/mpeg">
    Тег audio не поддерживается вашим браузером.
    <a href="music.mp3">Скачайте музыку</a>.
</audio>
<div id="map"></div>
<script>

    // The following example creates complex markers to indicate beaches near
    // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
    // to the base of the flagpole.
    var imageB = 'boilerhouse.png';
    var image = 'circle.png';
    function initMap() {
        var obj1 = {lat: 50.086651, lng: 36.251976};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11.8,
            center: {lat: 49.989946, lng: 36.220432},
            styles:
                [
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.place_of_worship",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.place_of_worship",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.place_of_worship",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    }
                ]
        });

        setMarkers(map);
        setMarkersBoil(map);



        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">КП "ХТС"</h1>'+
            '<div id="bodyContent">'+
            '<p><b>котельная ул. Академическая, 1</b>, also referred to as <b>средних котельных</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: obj1,
            map: map,
            icon: imageB,
            title: 'котельная ул. Академическая, 1'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });





    }

    // Data for the markers consisting of a name, a LatLng and a zIndex for the
    // order in which these markers should display on top of each other.
    var houses = [
        ['б-р Жасміновий, 12 №1', 49.94884927, 36.32032261, 1],
        ['б-р Жасміновий, 12 №2', 49.94837982, 36.31967888, 2],
        ['б-р Жасміновий, 12 №3', 49.94788965, 36.31903515, 3],
        ['вул. Танкопія, 26', 49.95186887, 36.3214598, 4],
        ['б-р Жасміновий, 10', 49.94884592, 36.31912763, 5],
        ['б-р Жасміновий, 1', 49.94967435, 36.31451423, 6],
        ['б-р Жасміновий, 11 №1', 49.95047516, 36.32518943, 7],
        ['б-р Жасміновий, 11 №2', 49.9503647, 36.32429893, 8],
        ['б-р Жасміновий, 11 №3', 49.95024044, 36.32337625, 9],
        ['б-р Жасміновий, 13', 49.9507129, 36.3259471, 10]
    ];

    var boilers = [
        ['кот. вул. Ігоря Муратова, 7', 49.986674, 36.137932, 1],
        ['кот. вул. Андріївська, 41/43', 50.001214, 36.196477, 2],
        ['кот. вул. Греківська, 30', 49.977378, 36.230451, 3],
        ['кот. пров. Біологічний, 1', 49.953370, 36.236378, 4],
        ['кот. вул. Тернопільська, 19', 49.913797, 36.224930, 5],
        ['кот. пров. Лиманський, 1', 49.936382, 36.252119, 6],
        ['кот. вул. Миргородська, 16', 49.972927, 36.226448, 7],
        ['кот. вул. Диспетчерська, 27а', 49.924556, 36.257438, 8],
        ['кот. вул. Достоєвського, 89а', 49.943494, 36.251330, 9],
        ['кот. вул. Букова, 20', 50.042561, 36.183451, 10],
        ['кот. вул. Букова, 20а', 50.043762, 36.184685, 11],
        ['кот. вул. Букова, 14', 50.043419, 36.186868, 12],
        ['кот. вул. Горянська, 70', 50.041520, 36.346693, 13],
        /*['кот. вул. Академічна, 1', 50.086651, 36.251976, 14],*/
        ['кот. вул. Саперна, 10б', 50.029927, 36.294116, 15],
        ['кот. вул. Помірки, 27', 50.039196, 36.279456, 16],
        ['кот. вул. Нестерова, 9', 49.917166, 36.280342, 17],
        ['кот. вул. Миру, 74 а', 49.941064, 36.401049, 18],
        ['кот. вул. Благовіщенська, 10/12', 49.989946, 36.220432, 19],
        ['кот. вул. Конєва, 7а', 49.985255, 36.214733, 20],
        ['кот. вул. Свинаренка, 5а', 49.951917, 36.164727, 21],
        ['кот. вул. Світланівська, 23а', 49.962625, 36.210038, 22],
        ['кот. вул. Семінарська, 32', 49.980880, 36.197574, 23],
        ['кот. в-д Достоєвського, 3', 49.940221, 36.226859, 24]
    ];

    function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };
        for (var i = 0; i < houses.length; i++) {
            var house = houses[i];
            var marker = new google.maps.Marker({
                position: {lat: house[1], lng: house[2]},
                map: map,
                icon: image,
                shape: shape,
                title: house[0],
                zIndex: house[3]
            });
        }
    }
    function setMarkersBoil(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.

        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        /*var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };*/
        for (var i = 0; i < boilers.length; i++) {
            var boiler = boilers[i];
            var marker = new google.maps.Marker({
                position: {lat: boiler[1], lng: boiler[2]},
                map: map,
                icon: imageB,
                draggable:true, //Позволяет перетягивать маркеры по карте
                //shape: shape,
                title: boiler[0],
                zIndex: boiler[3]
            });
        }

    }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=">
</script>
</body>
</html>
