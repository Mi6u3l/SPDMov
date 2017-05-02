"use strict";
app.factory('newsFactory', function($http) {
    var newsFactory = {};
    newsFactory.getNewsItems = function (env) {
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList + "')"
       return $http ({
           method: 'GET',
           url: urlBase + '/items?$select=ID,FileRef,Title,Subtitle,Origin,Date&$top=4&$orderby=Date desc',
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};

    return newsFactory;  
});
    