"use strict";
app.controller("allnewsController", allnewsController);
function allnewsController($scope, env, allnewsFactory, $sce) {
  $scope.absoulteUrl = env.backofficeURL;
  $scope.itemsPerPage = 5;
  $scope.currentPage = 1;
  $scope.allNewsIds;
  $scope.news;
  $scope.init = function() {
        allnewsFactory.getAllNewsCount(env)
            .then(function (response) {      
               $scope.totalItems = response.data.d.ItemCount;
            }, function (error) {
                $scope.status = 'Unable to load news count: ' + error.message;
            });
         $scope.getAllIds()
            .then(function(response){
                $scope.allNewsIds = response;
                $scope.getNewsOffSet(response);
            }
         );       
  }

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.getAllIds = function() {
        return allnewsFactory.getAllIds(env)
            .then(function (response) {      
                return response.data.d.results;
            }, function (error) {
                $scope.status = 'Unable to load ids: ' + error.message;
            });
  };

  $scope.pageChanged = function() {  
      $scope.getNewsOffSet($scope.allNewsIds);   
  };

  $scope.getNewsOffSet = function(allidsResponse) {
     var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
     var endIndex = startIndex + $scope.itemsPerPage;
     var startId = allidsResponse[startIndex].Id;
     var endId = 99999;
     if (endIndex <= allidsResponse.length - 1) {
        endId = allidsResponse[endIndex-1].Id;
     }
     allnewsFactory.getNewsOffSet(env, startId, endId)
          .then(function (response) {
               $scope.news = response.data.d.results;

            }, function (error) {
                $scope.status = 'Unable to load news content: ' + error.message;
            });
     };
  $scope.init();
};

