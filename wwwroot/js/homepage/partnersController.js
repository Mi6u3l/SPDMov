"use strict";
app.controller("partnersController", partnersController);
function partnersController($scope, env, partnersFactory) {
    $scope.absoulteUrl = env.backofficeURL;
    $scope.partners;
    partnersFactory.getPartnersItems(env)
        .then(function (response) {
            $scope.partners = response.data.d.results;

        }, function (error) {
            $scope.status = 'Unable to load partners data: ' + error.message;
        });
}



