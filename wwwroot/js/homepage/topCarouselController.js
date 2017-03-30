"use strict";
var app = angular.module("app-homepage", ['ui.bootstrap', 'configSettings']);
app.controller("topCarouselController", topCarouselController);

function topCarouselController($scope, topCarouselFactory, env) {
    $scope.absoulteUrl = env.backofficeURL;
    $scope.myInterval = 5000;
    $scope.slides;
    topCarouselFactory.getTopCarouselItems(env)
            .then(function (response) {
                $scope.slides = response.data.d.results;
                
            }, function (error) {
                $scope.status = 'Unable to load carousel data: ' + error.message;
            });

   
}


