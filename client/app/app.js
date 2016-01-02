'use strict';

angular.module('appVotingApp', [
  'appVotingApp.auth',
  'appVotingApp.admin',
  'appVotingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'validation.match',
  '720kb.socialshare',
  'chart.js',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
