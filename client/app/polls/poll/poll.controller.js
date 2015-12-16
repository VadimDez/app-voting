'use strict';

(function() {
  class PollCtrl {

    constructor(pollService, $state, answerService) {
      this.pollService = pollService;
      this.answerService = answerService;

      this.pollService.get($state.params.id)
        .then(data => {
          this.poll = data.data;
        });
    }

    /**
     * Submit answer
     * @param option
     */
    submitAnswer(option) {
      this.answerService.post({
        name: option,
        poll: this.poll._id
      }).then(() => {

      })
    }
  }

  angular.module('appVotingApp')
    .controller('PollCtrl', PollCtrl);

  PollCtrl.$inject = ['pollService', '$state', 'answerService'];
}());
