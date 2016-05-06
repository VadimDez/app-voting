'use strict';

(function() {

  class MainController {

    constructor(pollService) {
      this.hasLoaded = false;

      pollService.last(10)
        .then(data => {
          this.hasLoaded = true;

          this.polls = data.data;
        });
    }
  }

  MainController.$inject = ['pollService'];

  angular.module('appVotingApp')
    .controller('MainController', MainController);
})();
