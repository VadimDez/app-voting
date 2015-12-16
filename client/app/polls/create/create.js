'use strict';

angular.module('appVotingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls/create', {
        url: '/polls/create',
        templateUrl: 'app/polls/create/create.html',
        controller: 'PollCreateCtrl',
        controllerAs: 'pollCreateCtrl'
      });
  });
