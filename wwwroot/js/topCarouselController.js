(function () {
    "use strict";
    angular.module("app-homepage")
        .controller("topCarouselController", topCarouselController);

    function topCarouselController($scope) {
        $scope.myInterval = 5000;
        $scope.slides = [
          {
              id: 1,
              paging: 'Hospital de S.João forma médicos em Estimulação Cerebral para tratar Parkinson',
              heading: 'A SPDMov reúne profissionais das diversas áreas da saúde,',
              subheading: 'Incluindo Médicos (Neurologistas, Neurocirurgiões, Psiquiatras, outros), Enformeiros, Psicólogos, Fisioterapeutas e investigadores das ciências básicas com especial interesse nesta área do conhecimento.',
              image: '../img/carousel_image1.png'
          },
          {
              id: 2,
              paging: 'Novos estudos de ressonância magnética permitem diagnosticar Parkinson',
              heading: 'A SPDMov reúne profissionais das diversas áreas da saúde,',
              subheading: 'Incluindo Médicos (Neurologistas, Neurocirurgiões, Psiquiatras, outros), Enformeiros, Psicólogos, Fisioterapeutas e investigadores das ciências básicas com especial interesse nesta área do conhecimento.',
              image: '../img/carousel_image2.png'
          },
          {
              id: 3,
              paging: 'Portuguese Movement Disorders Society just became an affiliate member of the Internaitional Parkinkson and Movement Disorder Society',
              heading: 'A SPDMov reúne profissionais das diversas áreas da saúde,',
              subheading: 'Incluindo Médicos (Neurologistas, Neurocirurgiões, Psiquiatras, outros), Enformeiros, Psicólogos, Fisioterapeutas e investigadores das ciências básicas com especial interesse nesta área do conhecimento.',
              image: '../img/carousel_image3.png'
          },
          {
              id: 4,
              paging: 'Do not miss the chance to read the letter from Joaquim Ferreira, Char of the MDS-ES (August 2016), entitled "New Steps for a Closer Collaboration"',
              heading: 'A SPDMov reúne profissionais das diversas áreas da saúde,',
              subheading: 'Incluindo Médicos (Neurologistas, Neurocirurgiões, Psiquiatras, outros), Enformeiros, Psicólogos, Fisioterapeutas e investigadores das ciências básicas com especial interesse nesta área do conhecimento.',
              image: '../img/carousel_image4.png'
          }
        ];

      
    }

})();

