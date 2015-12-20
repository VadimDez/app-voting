'use strict';
(function () {

  class ProfileCtrl {
    constructor(pollService) {
      this.pollService = pollService;

      this.pollService.getMine()
        .then(data => {
          this.polls = data.data;
        });
    }

    deletePoll(poll) {
      this.pollService.remove(poll._id).then(() => {
        this.polls.splice(this.polls.indexOf(poll), 1);
      });
    }
  }

  angular.module('appVotingApp')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['pollService'];
}());
