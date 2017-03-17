"use strict";
var app = angular.module("app-homepage");
app.controller("topCarouselController", topCarouselController);

function topCarouselController($scope, topCarouselFactory) {
    $scope.absoulteUrl = 'http://23.94.156.22:8090';
    $scope.myInterval = 5000;
    $scope.slides;
    topCarouselFactory.getTopCarouselItems()
            .then(function (response) {
                $scope.slides = response.data.d.results;
                
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });

   
}


