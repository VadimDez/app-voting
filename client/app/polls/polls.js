'use strict';

angular.module('appVotingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls', {
        url: '/polls',
        templateUrl: 'app/polls/polls.html',
        controller: 'PollsCtrl',
        controllerAs: 'pollsCtrl'
      });
  });
