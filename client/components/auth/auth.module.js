'use strict';

angular.module('appVotingApp.auth', [
  'appVotingApp.constants',
  'appVotingApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
