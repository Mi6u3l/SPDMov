"use strict";
app.factory('allnewsFactory', function($http) {
    var allnewsFactory = {};
     allnewsFactory.getAllNewsCount = function (env) {  
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList  + "')";  
       return $http ({
           method: 'GET',
           url: urlBase + "/ItemCount",
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};

 allnewsFactory.getNewsOffSet = function (env, startIndex, endIndex) {  
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList  + "')";  
       return $http ({
           method: 'GET',
           url: urlBase + "/items?$skip=" + startIndex + "&$top=" + endIndex + "&$orderby=Date desc",
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};


    return allnewsFactory;  
});
    
    