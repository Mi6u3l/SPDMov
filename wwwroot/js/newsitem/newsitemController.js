"use strict";
app.controller("newsitemController", newsitemController);
function newsitemController($scope, env, newsitemFactory, $sce) {
    $scope.absoulteUrl = env.backofficeURL;
    $scope.env = env;
    $scope.$watch('newsItemID', function () {
        newsitemFactory.getNewsItem($scope.newsItemId, env)
            .then(function (response) {
                $scope.body = $sce.trustAsHtml(response.data.d.Body);
                $scope.title = $sce.trustAsHtml(response.data.d.Title);
                $scope.subtitle = $sce.trustAsHtml(response.data.d.Subtitle);
                $scope.imageUrl = response.data.d.FileRef;
                console.log($scope.imageUrl);
             
            }, function (error) {
                $scope.status = 'Unable to load detail: ' + error.message;
            });
        }); 
}


