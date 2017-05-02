"use strict";
app.controller('networkController', function($scope, $http, $window) {
    $scope.detail = [];
    $scope.locations = [];
    $scope.treatments = [];
    $scope.showDetails = false;
    $scope.init = function () {
    $scope.detail =
    {
        id: 1,
        title: 'Centro Hospitalar de Lisboa Central',
        subtitle : 'Carateristicas do serviço e grupo de doenças do movimento',
        description: '- Serviço de neurologia individualizado',
        image: '/img/centrohospitalar.png'
    }
    
    $scope.locations = [
        {
            id: 1,
            coordinates: '38.7437395,-9.2304158',
            name: 'Lisboa',
        },
        {
            id: 2,
            coordinates:'41.162928,-8.65695848',
            name: 'Porto'
        }
    ];
    $scope.treatments = [
        {
            id: 1,
            name: 'tratamento 1'
        },
        {
            id: 2,
            name: 'tratamento 2'
        }
    ];
   }
    $scope.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.9656249,
            lng: -7.7762689
        },
        zoom: 7
    });

    //center map 
    $scope.centerMap = function(coordinates, location) {
         var coordinatesArray = coordinates.split(',');
         $scope.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: parseFloat(coordinatesArray[0]),
                lng:  parseFloat(coordinatesArray[1])
            },
            zoom: 12
        });

        //set markers for location
         setMarker($scope.map, new google.maps.LatLng(38.722230, -9.142521), 'Centro Hospitalar de Lisboa Central');
    }

    // place a marker
    function setMarker(map, position, title, content) {
        var marker;
        var markerOptions = {
            position: position,
            map: map,
            title: title,
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        };

        marker = new google.maps.Marker(markerOptions);
       
        google.maps.event.addListener(marker, 'click', function () {
            console.log(marker.title);
            //fill details information

            //show details
            console.log($scope.showDetails);
            $scope.showDetails = true;
            $scope.$apply();
            // close window if not undefined
            //if (infoWindow !== void 0) {
            //    infoWindow.close();
            //}
            // create new window
            //var infoWindowOptions = {
            //    content: content
            //};
            //var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            //infoWindow.open(map, marker);
        });
    }

    $scope.init();
    setMarker($scope.map, new google.maps.LatLng(38.722230, -9.142521), 'Centro Hospitalar de Lisboa Central');
      
 });



  