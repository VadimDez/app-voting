'use strict';

angular.module('appVotingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls/poll', {
        url: '/polls/poll/:id',
        templateUrl: 'app/polls/poll/poll.html',
        controller: 'PollCtrl',
        controllerAs: 'pollCtrl'
      });
  });
