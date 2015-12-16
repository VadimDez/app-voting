'use strict';

class PollsCtrl {

  constructor(pollService) {
    this.polls = [];
    this.pollService = pollService;

    this.pollService.get().then(polls => {
      console.log(polls.data);

      this.polls = polls.data;
    })
  }
}

angular.module('appVotingApp')
  .controller('PollsCtrl', PollsCtrl);
