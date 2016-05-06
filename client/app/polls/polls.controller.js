(function () {
  'use strict';

  class PollsCtrl {

    constructor(pollService) {
      this.polls = [];
      this.hasLoaded = false;

      pollService.get().then(polls => {
        this.hasLoaded = true;
        this.polls = polls.data;
      });
    }
  }

  PollsCtrl.$inject = ['pollService'];

  angular.module('appVotingApp')
    .controller('PollsCtrl', PollsCtrl);
}());
