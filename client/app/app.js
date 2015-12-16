'use strict';

angular.module('appVotingApp', [
  'appVotingApp.auth',
  'appVotingApp.admin',
  'appVotingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  '720kb.socialshare'

])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
