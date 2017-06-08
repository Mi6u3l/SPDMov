"use strict";
app.factory('partnersFactory', function ($http) {
    var partnersFactory = {};
    partnersFactory.getPartnersItems = function (env) {
        var urlBase = env.backofficeURL + "/_api/lists/getbytitle('" + env.partnersList + "')"
        return $http({
            method: 'GET',
            url: urlBase + '/items?$select=ID,FileRef',
            headers: { "Accept": "application/json;odata=verbose" }
        });
    };

    return partnersFactory;
});
