"use strict";
app.controller("articleController", articleController);
function articleController($scope, articleFactory, $sce, env) {
    $scope.articleLoading = true;
    $scope.body;
    $scope.env = env;
    $scope.$watch('articleId', function () {
        articleFactory.getArticleContent($scope.articleId, env)
            .then(function (response) {
                $scope.title = $sce.trustAsHtml(response.data.d.results["0"].Title);
                $scope.body = $sce.trustAsHtml(response.data.d.results["0"].Body);
                $scope.subtitle = $sce.trustAsHtml(response.data.d.results["0"].Sub_x0020_Title);
                $scope.articleLoading = false;
             
            }, function (error) {
                $scope.status = 'Unable to load content: ' + error.message;
            });
        }); 
}