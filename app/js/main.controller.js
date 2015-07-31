(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('MainController', ['$scope',

    function ($scope) {

      $scope.codebytes = {
        title: 'CodeBytes',
        tagline: 'Code. Conversation. Community.',
        image: 'images/codebytes.png'
      };


  }

  ]);

}());
