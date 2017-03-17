"use strict";
var app = angular.module("app-homepage");
app.factory('topCarouselFactory', function($http) {

    var urlBase = 'http://23.94.156.22:8090/_api/lists/getbytitle(\'TopCarousel\')'
    var topCarouselFactory = {};
    topCarouselFactory.getTopCarouselItems = function () {
       // return $http.get(urlBase + '/items?$select=FileRef,Paging,Heading,Subheading');
       return $http ({
           method: 'GET',
           url: urlBase + '/items?$select=ID,FileRef,Paging,Heading,Subheading',
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};

    return topCarouselFactory;  
});
    