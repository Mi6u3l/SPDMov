"use strict";
app.directive('setCarouselPaging', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
            function addPaging() {
                $timeout(function () {
                    var controllerScope = $scope.$$childHead;
                    var slides = controllerScope.slides;
                    if (slides) {
                        $("span.ng-binding").each(function (index) {
                            if (slides[index] != undefined) {
                                $(this).text(slides[index].Paging);
                                $(this).removeClass('sr-only');
                            }
                        });
                    } else {
                        addPaging();
                    }
                }, 100);
            }

            addPaging();

        }
    };
}]);