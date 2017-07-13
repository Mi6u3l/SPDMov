"use strict";
app.factory('topCarouselFactory', function($http) {
    var topCarouselFactory = {};
    topCarouselFactory.getTopCarouselItems = function (env) {
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.topCarouselList + "')"
       return $http ({
           method: 'GET',
           url: urlBase + '/items?$select=ID,FileRef,Paging,Heading,Subheading,Link',
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};
    return topCarouselFactory;  
});
    