"use strict";
app.factory('networkFactory', function ($http) {
    var networkFactory = {};
    networkFactory.getAllNetworkItems = function (env) {
        var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.networkList + "')";
        return $http({
            method: 'GET',
            url: urlBase + "/items",
            headers: { "Accept": "application/json;odata=verbose" }
        });
    };

    return networkFactory;
});
