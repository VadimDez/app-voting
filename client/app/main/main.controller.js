'use strict';

(function() {

class MainController {

  constructor($http, pollService) {
    this.$http = $http;

    pollService.last(10)
      .then(data => {
        this.polls = data.data;
      });
  }
}

  angular.module('appVotingApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$http', 'pollService'];
})();
