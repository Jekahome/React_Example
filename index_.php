<?php

if($_SERVER['REQUEST_METHOD']=="POST"){
    $file =  $_POST["id"];
    $type =  $_POST["type"];
    if(is_numeric($file) && ($type=='boilers' || $type=='itp' )){
        $file = (int)$file;
        if(file_exists("googlemaps/content/$type/$file.txt")){
           echo json_encode(["content" => file_get_contents("googlemaps/content/$type/$file.txt")],1);
           // echo json_encode(["content"=> " Hello "] );
            exit;
        }
    }
    echo json_encode(["content" =>""]);
    exit;
}

if (1) {


    /*
    foreach($data){
        echo 'addMarker({lat: 49.986674, lng: 36.137932});'; //вул. Ігоря Муратова, 7
    }
    */


    //require 'googlemaps/class/Location.php';


    require_once 'googlemaps/class/ITPs.php';
    require_once 'googlemaps/class/Counters.php';

    $Boilers = new ITPs();
    $csv = array_map('str_getcsv', file('googlemaps/markers/itp2.csv'));
    foreach ($csv as $item){
        $Boilers->add(new ITP($item));
    }

    $Houses = new Counters();
    $csv = array_map('str_getcsv', file('googlemaps/markers/counter2.csv'));
    foreach ($csv as $item){
        $Houses->add(new Counter($item));
    }


    // ITP
    /*
    $ITPs = new ITPs();

    $csv = array_map('str_getcsv', file('./markers/itp.csv'));


    foreach ($csv as $item){
        $ITPs->add(new ITP($item));
    }

    //сохранение
    $SITPs = serialize($ITPs);
    file_put_contents('markers/StoreITP.txt', $SITPs);
    */


/*
    //сохранение
    $SITPs = serialize($ITPs);
    file_put_contents('googlemaps/markers/StoreITP.txt', $SITPs);



//загрузка
    $SITPs = file_get_contents('googlemaps/markers/StoreITP.txt');
    $Boilers = unserialize($SITPs);
    */
/*
    $File='googlemaps/markers/itp2.csv';
    $sep=',';
    foreach ($Boilers->itp as $item) {

        file_put_contents($File,$item->id.$sep.'"'.$item->address.'"'.$sep.'"'.$item->addressAdd.'"'.$sep.$item->lat.$sep.$item->lng.PHP_EOL,8);
    }*/
    /*foreach ($Boilers->itp as $item) {

       echo $item->address,$item->lat,$item->lng,PHP_EOL ;
    }
    exit;*/
    
/*
//echo count($ITPs->itp),PHP_EOL;

    /** @var  $item ITP * /
    echo "ITP\n";
    foreach ($ITPs->itp as $item) {
        if (empty($item->lat)) echo $item->id, "/", $item->address, PHP_EOL;
    }
*/





    // Counters




/*
    foreach ($Houses->counters as $item) {

        echo $item->address,$item->lat,$item->lng,PHP_EOL ;
    }
*/
    /*
    //сохранение
    $SCounters = serialize($Counters);
    file_put_contents('markers/StoreCounters.txt', $SCounters);


//загрузка
    $SCounters = file_get_contents('googlemaps/markers/StoreCounters.txt');
    $Houses = unserialize($SCounters);

    */
/*
    $File='googlemaps/markers/counter2.csv';
    $sep=',';
    foreach ($Houses->counters as $item) {

        file_put_contents($File,$item->id.$sep.'"'.$item->city.'"'.$sep.'"'.$item->address.'"'.$sep.'"'.$item->addressAdd.'"'.$sep.$item->lat.$sep.$item->lng.PHP_EOL,8);
    }
*/

/*
//echo count($Counters->counters),PHP_EOL;

    / ** @var  $item Counter * /
    echo "Counters\n";
    foreach ($Counters->counters as $item) {
        if (empty($item->lat)) echo $item->id, "/", $item->addressAdd, PHP_EOL;
    }
*/

    //exit;
}
?>




<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
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
        h3 {
            position: absolute;
            left: 50%;
            top: 10px;
            text-transform: uppercase;
            z-index: 2;
            opacity: 0.3;
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
        .description ul li p {
            float: left;
            padding-left: 10px;
        }


    </style>
    <title>WB&KTN</title>
</head>
<body>
<h3>Объекты <span>организации</span></h3>
<div class="description">
    <ul>
        <li id="boiler"><img src="googlemaps/boilerhouse.png" alt="boilerhouses"><p>Котельные</p></li>
        <li><img src="googlemaps/half.png" alt="half"><p>Тепловые пункты</p></li>
        <li><img src="googlemaps/hero.png" alt="hero"><p>Дома</p></li>
    </ul>
</div>
<audio controls autoplay>
    <source src="/googlemaps/music.mp3" type="audio/mpeg">
    Тег audio не поддерживается вашим браузером.
    <a href="/googlemaps/music.mp3">Скачайте музыку</a>.
</audio>
<div id="map"></div>
<script>
    'use strict';



    function setText(text) {
        console.log("setText",text);
    }


     document.getElementById("boiler").addEventListener("click",function(){

         var form = new FormData();
             form.append("id","1");

            fetch('/',{method:'post', body: form})
            .then(function(response) {
                   if(response.status==200){
                    return  response.json();
                   }
                 throw Error("Нет данных");
            })
             .then(function(data) {
                 setText(data);
            })
            .catch( console.error );
    } ,null);


    function initMap() { //Создаём функцию карты
        //Координаты для объектов
        var city = {lat: 49.989946, lng: 36.220432};

        var imageB = '/googlemaps/boilerhouse.png';
        var image = '/googlemaps/circle.png';


        //Иконки для объектов
        var half = '/googlemaps/half.png';
        var hero = '/googlemaps/hero.png';
        var radio = '/googlemaps/radio.png';
        var hydra = '/googlemaps/hydra.png';
        var vampire = '/googlemaps/vampire.png';
        var boilerhouse = '/googlemaps/boilerhouse.png';
        //Переменная с новой картой
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11.8,
            center: city,
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

var  houses = [];

<?php
/** @var  $item Counter */
foreach ($Houses->counters as $item) {
    if (!empty($item->lat)){
        //echo "new google.maps.Marker({position: {lat:parseFloat(".$item->lat."), lng:parseFloat(".$item->lng.")},map: map,icon: half});";
        echo 'houses.push({"id":'.$item->id.',"address":"'.$item->addressAdd.'","lat":'.$item->lat.',"lng":'.$item->lng.'});';
    }
}
?>

var  boilers = [];
<?php
/** @var  $item ITP */
foreach ($Boilers->itp as $item) {
if (!empty($item->lat)){
   // echo "new google.maps.Marker({position: {lat:parseFloat(".$item->lat."), lng:parseFloat(".$item->lng.")},map: map,icon: half});";
    echo 'boilers.push({"id":'.$item->id.',"address":"'.$item->address.'","lat":'.$item->lat.',"lng":'.$item->lng.'});';
}
}
?>



        var DataHouses={};
        var DataBoilers={};

        function deleteM(){



                for( var id in DataHouses)
                {
                    DataHouses[id].setMap(null);
                }

        }


        function setMarkers() {
              var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };
            for (var i = 0; i < houses.length; i++) {

                var marker = new google.maps.Marker({
                    position: {lat: houses[i].lat, lng:houses[i].lng},
                    map: map,
                    icon: image,
                    shape: shape,
                    title: houses[i].address,
                    zIndex: i
                });

                DataHouses[houses[i].id]=marker;
            }
        }
        function setMarkersBoil() {

            for (var i = 0; i < boilers.length; i++) {
                var marker = new google.maps.Marker({
                    position: {lat: boilers[i].lat, lng: boilers[i].lng},
                    map: map,
                    icon: imageB,
                    draggable:true, //Позволяет перетягивать маркеры по карте
                    //shape: shape,
                    title: boilers[i].address,
                    zIndex: i
                });
                DataBoilers[boilers[i].id]=marker;
            }

        }

        setMarkers();
        setMarkersBoil();
        deleteM();






    }
</script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPQkGV22H3nG3JA9Wn_cWx4rFpGpcH714&callback=initMap">
</script>
</body>
</html>
