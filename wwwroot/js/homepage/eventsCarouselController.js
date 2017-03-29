"use strict";
var app = angular.module("app-homepage");
app.controller('eventsCarousel', function($scope) {
    $scope.events = [];
    
    $scope.init = function () {
        $scope.events = [
           {
               id: 1,
               day: '05',
               date: '12/2016',
               title: 'Evento 1',
               caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
           },
           {
               id: 2,
               day: '06',
               date: '12/2016',
               title: 'Evento 2',
               caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
           },
           {
               id: 3,
               day: '07',
               date: '12/2016',
               title: 'Evento 3',
               caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
           },
           {
               id: 4,
               day: '08',
               date: '12/2016',
               title: 'Evento 4',
               caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
           },
            {
                id: 5,
                day: '09',
                date: '12/2016',
                title: 'Evento 5',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                id: 6,
                day: '10',
                date: '12/2016',
                title: 'Evento 6',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ];


    };
 
    $scope.init();
});

app.directive('initEventsCarousel', ['$timeout', function ($timeout) {
    return {
        link: function ($scope) {
                $timeout(function () {
                    //events carousel
                    (function () {
                        $('#eventsCarousel').find('.item').first().addClass('active');
                        $('#eventsCarousel').find('.carousel-inner').css('width', '100%');
                        // setup your carousels as you normally would using JS
                        // or via data attributes according to the documentation
                        // http://getbootstrap.com/javascript/#carousel
                        $('#eventsCarousel').carousel({ interval: 2500 });
                    }());

                    (function () {
                        $('.carousel-showmanymoveone .item').each(function () {
                            var itemToClone = $(this);

                            for (var i = 1; i < 4; i++) {
                                itemToClone = itemToClone.next();

                                // wrap around if at end of item collection
                                if (!itemToClone.length) {
                                    itemToClone = $(this).siblings(':first');
                                }

                                // grab item, clone, add marker class, add to collection
                                itemToClone.children(':first-child').clone()
                                  .addClass("cloneditem-" + (i))
                                  .appendTo($(this));
                            }
                        });
                    }());
                }, 0, false);
        }
    };
}]);



  