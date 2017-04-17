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
    
      allnewsFactory.getAllIds = function (env) {  
        var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList  + "')";  
        return $http ({
            method: 'GET',
            url: urlBase + "/items?$select=Id",
            headers:  { "Accept": "application/json;odata=verbose" }
        });
    };

    allnewsFactory.getNewsOffSet = function (env, startId, endId) {  
        var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.newsList  + "')";  
        return $http ({
            method: 'GET',
            url: urlBase + "/items?$select=ID,FileRef,Title,Subtitle,Origin,Date&$orderby=Date desc&$filter=(ID ge " + startId + ") and (ID le " + endId + ")",
            headers:  { "Accept": "application/json;odata=verbose" }
        });
    };


    return allnewsFactory;  
});
    
    