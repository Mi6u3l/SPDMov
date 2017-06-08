"use strict";
app.factory('eventsCarouselFactory', function($http) {
    var eventsCarouselFactory = {};
    eventsCarouselFactory.getEventsItems = function (env) {
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.eventsCarouselList + "')"
       return $http ({
           method: 'GET',
           url: urlBase + '/items?$select=ID,Title,EventDate,Description&$top=10',
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};
    return eventsCarouselFactory;  
});
    