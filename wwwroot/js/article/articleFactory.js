"use strict";
app.factory('articleFactory', function($http) {
    var articleFactory = {};
    articleFactory.getArticleContent = function (articleTitle, env) {
       var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.menuArticleList  + "')";
       return $http ({
           method: 'GET',
           url: urlBase + "/items?$filter=TitleID eq '" + articleTitle + "'",
           headers:  { "Accept": "application/json;odata=verbose" }
       });
};

    return articleFactory;  
});
    