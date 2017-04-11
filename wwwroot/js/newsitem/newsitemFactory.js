"use strict";
app.factory('newsitemFactory', function($http) {
    var newsitemFactory = {};
     newsitemFactory.getNewsItem = function (newsItemID, env) {
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList  + "')";
       return $http ({
           method: 'GET',
           url: urlBase + "/items(" + newsItemID + ")?$select=ID,FileRef,Title,Subtitle,Origin,Date,Body&$orderby=Date desc",
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};

    return newsitemFactory;  
});
    
    