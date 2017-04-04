"use strict";
app.controller('eventsCarousel', eventsCarousel)
function eventsCarousel ($scope, eventsCarouselFactory, env) {
    $scope.events;   
    eventsCarouselFactory.getEventsItems(env)
        .then(function (response) {
            $scope.events = response.data.d.results;    
        }, function (error) {
            $scope.status = 'Unable to load events data: ' + error.message;
        });
}
 


