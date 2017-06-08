"use strict";
app.directive('initEventsCarousel', ['$timeout', function ($timeout) {
    return {
        link: function ($scope) {
                $timeout(function () {
                    (function () {
                        $('#eventsCarousel').find('.item').first().addClass('active');
                        $('#eventsCarousel').find('.carousel-inner').css('width', '100%');
                        $('#eventsCarousel').carousel({ interval: 5000 });
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
                }, 1000, false);
        }
    };
}]);



  