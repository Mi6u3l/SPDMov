"use strict";
app.controller('networkController', networkController);
function networkController ($scope, networkFactory, $sce, env) {
    $scope.showDetails = false;
    $scope.init = function () {
     //exiting locations
        $scope.locations = [
             {
                 id: 1,
                 coordinates: '38.2098785,-26.5875926',
                 name: 'Açores',
             },
            {
                id: 2,
                coordinates: ' 38.0756244,-7.6840605',
                name: 'Alentejo',
            },
            {

                id: 2,
                coordinates: '37.2273123,-8.5059114',
                name: 'Algarve',
            },
            {
                id: 3,
                coordinates: '40.0269564,-7.9982683',
                name: 'Centro',
            },
            {
                id: 4,
                coordinates: '38.6997574,-9.1933197',
                name: 'Lisboa e Vale do Tejo',
            },
            {
                id: 5,
                coordinates: '32.5809151,-16.5541472',
                name: 'Madeira',
             },
            {
                id: 6,
                coordinates:'41.2462843,-7.9628386',
                name: 'Norte'
            }
        ];

        

        //initilaze map position
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 39.9656249,
                lng: -7.7762689

            },
            zoom: 7
        });


      //get markers
        networkFactory.getAllNetworkItems(env)
        .then(function (response) {
            $scope.markers = response.data.d.results;
            $scope.markers.forEach(function (elem) {
                var imageUrl = elem.Image == null ? null : elem.Image.Url;
                setMarker($scope.map, new google.maps.LatLng(elem.Latitude, elem.Longitude), elem.Title, elem.Description, imageUrl);
            });
        
        }, function (error) {
            $scope.status = 'Unable to load markers data: ' + error.message;
        });
    }

  

    //center map according to user's choice
    $scope.centerMap = function(coordinates, location) {
       var coordinatesArray = coordinates.split(',');
        $scope.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: parseFloat(coordinatesArray[0]),
            lng:  parseFloat(coordinatesArray[1])
        },
        zoom: 9
        });

        $scope.markers.forEach(function (elem) {
            var imageUrl = elem.Image == null ? null : elem.Image.Url;
            setMarker($scope.map, new google.maps.LatLng(elem.Latitude, elem.Longitude), elem.Title, elem.Description, imageUrl);
        });
    }

    // place a marker
    function setMarker(map, position, title, description, imageUrl) {
        var marker;
        var markerOptions = {
            position: position,
            map: map,
            title: title,
            description: description,
            imageUrl: imageUrl,
            icon: '../img/mapHospital.png'
        };

        marker = new google.maps.Marker(markerOptions);
       
        google.maps.event.addListener(marker, 'click', function () {
            //get / show details
            $scope.detail = {
                title: title,
                description: $sce.trustAsHtml(description),
                image: imageUrl
            };
            $scope.showDetails = true;
            $scope.$apply();
        });
    }

    $scope.init();
     
 }



  