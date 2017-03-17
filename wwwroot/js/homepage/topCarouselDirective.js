"use strict";
var app = angular.module("app-homepage");
app.directive('setCarouselPaging', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
                $timeout(function () {
                    //top carousel paging
                    (function () {
                        var controllerScope = $scope.$$childHead;
                        var slides = controllerScope.slides;
                        $("span.ng-binding").each(function (index) {
                            $(this).text(slides[index].Paging);
                            $(this).removeClass('sr-only');
                         });
                    }());
                }, 500, false);
        }
    };
}]);