(function () {
    "use strict";
    angular.module("app-homepage")
        .controller("newsController", newsController);

    function newsController($scope) {
        $scope.news = [
          {
              id: 1,
              origin: 'Nacional',
              date: '11/12/2016',
              title: 'Novos estudos de ressonância',
              subtitle: 'Novos estudos de ressonância magnética permitem diagnosticar Parkinson',
              image: '../img/news1.png'
          },
          {
              id: 2,
              origin: 'Nacional',
              date: '01/01/2017',
              title: 'Hospital de S. João forma médicos',
              subtitle: 'Hospital de S. João forma médicos em Estimulação Cerebral para tratar Parkinson',
              image: '../img/news2.png'
          },
          {
              id: 3,
              origin: 'Internacional',
              date: '05/01/2017',
              title: 'Billy Connolly discovered he had Parkinson\'s',
              subtitle: 'disease after an Australian fan spotted his odd walk and told him to get tested ',
              image: '../img/news3.png'
          },
          {
              id: 4,
              origin: 'Nacional',
              date: '01/02/2017',
              title: 'Dia Mundial da Doença de Parkinson',
              subtitle: 'Estima-se que em Portugal existam mais de 13 mil pessoas com a Doença Parkinson',
              image: '../img/news4.png'
          }
        ];


    }

})();

