"use strict";
app.directive('setArticleImages', ['$timeout', function ($timeout) { 
    return {
        link: function (controller) { 
                $timeout(function () {
                    (function () {
                         $('img').each(function() {  
                         var imgsrc = this.src;
                         if (imgsrc.indexOf('/PublishingImages')  != -1 ) {
                            $(this).addClass('img-responsive');
                            this.src = controller.env.backofficeURL + "/" + imgsrc.substr(imgsrc.indexOf('/PublishingImages'));
                        }
                        });  
                    }());
                }, 300, false);
        },
        controller: "articleController"
    };
}]);