(function (){

  'use strict';

  angular.module('MSPortfolio')

  .controller('PortfolioController', ['$scope',

    function ($scope) {

      $scope.codebytes = {
        title: 'CodeBytes',
        tagline: 'Code. Conversation. Community.',
        url: 'http://development.codebytes-deployed.divshot.io/#/',
        image: 'images/codebytes.png',
        desc: 'CodeBytes is a social network for software developers at every stage of the learning process. Users can seek assistance with problems, share "A-ha!" moments, or simply connect with fellow developers.  Posts can include embedded GitHub gists and has a fully sortable/searchable content system.',
        github: 'https://github.com/Code-Bytes'
      };

      $scope.popquiz = {
        title: 'popQuiz!',
        tagline: 'Frivilous trivilous',
        url: 'http://development.meade-popquiz.divshot.io/#/',
        image: 'images/popquiz.png',
        desc: 'popquiz! is a community based trivia app. Players can create quizzes consisting of any number of questions and answers for other players to take.',
        github: 'https://github.com/MeadeSlocomb/PopQuiz'
      };


  }

  ]);

}());
