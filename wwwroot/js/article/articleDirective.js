"use strict";
app.directive('setArticleImages', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, controller) {
            function changeImagesUrl() {
                $timeout(function () {
                    var body = $scope.body;
                    if (body) {
                        $('img').each(function () {
                            var imgsrc = this.src;
                            if (imgsrc.indexOf('/PublishingImages') != -1) {
                                $(this).addClass('img-responsive');
                              //  this.src = controller.env.backofficeURL + "/" + imgsrc.substr(imgsrc.indexOf('/PublishingImages'));
                                this.src = $scope.absoulteUrl + "/" + imgsrc.substr(imgsrc.indexOf('/PublishingImages'));

                            }

                            if (imgsrc.indexOf('/SiteCollectionImages') != -1) {
                                $(this).addClass('img-responsive');
                                this.src = $scope.absoulteUrl + "/" + imgsrc.substr(imgsrc.indexOf('/SiteCollectionImages'));
                            }
                        });
                    } else {
                        changeImagesUrl();
                    }
                }, 100);
            }

            changeImagesUrl();
        },
        controller: "articleController"
    };
}]);