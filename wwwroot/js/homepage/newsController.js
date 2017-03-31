"use strict";
app.controller("newsController", newsController);
function newsController($scope, env, newsFactory) {
    $scope.absoulteUrl = env.backofficeURL;
    $scope.news;
    newsFactory.getNewsItems(env)
        .then(function (response) {
            $scope.news = response.data.d.results;
            
        }, function (error) {
            $scope.status = 'Unable to load news data: ' + error.message;
        });
}



