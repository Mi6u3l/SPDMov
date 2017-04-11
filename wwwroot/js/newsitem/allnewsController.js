"use strict";
app.controller("allnewsController", allnewsController);
function allnewsController($scope, env, allnewsFactory, $sce) {
  $scope.itemsPerPage = 4;
  $scope.currentPage = 1;
  $scope.init = function() {
        allnewsFactory.getAllNewsCount(env)
            .then(function (response) {      
               $scope.totalItems = response.data.d.ItemCount;
               console.log($scope.totalItems)
            }, function (error) {
                $scope.status = 'Unable to load news count: ' + error.message;
            });
         $scope.getNewsOffSet();
  }

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
    $scope.getNewsOffSet();
  };

  $scope.pageChanged = function() {  
      $scope.getNewsOffSet();   
  };

  $scope.getNewsOffSet = function() {
        //get chunck of news
     var startIndex = ($scope.currentPage - 1) * $scope.itemsPerPage;
     var endIndex = startIndex + $scope.itemsPerPage;
     console.log('startindex ' + startIndex);
     console.log('endindex ' + endIndex);
     allnewsFactory.getNewsOffSet(env, startIndex, endIndex)
          .then(function (response) {    
               //$scope.NewsItems;
               console.log(response)
            }, function (error) {
                $scope.status = 'Unable to load news content: ' + error.message;
            });
     };
    //$log.log('Page changed to: ' + $scope.currentPage);
  $scope.init();
};

