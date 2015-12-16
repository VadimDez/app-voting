'use strict';

(function() {
  class PollCtrl {

    constructor(pollService, $state, answerService, Auth) {
      this.pollService = pollService;
      this.answerService = answerService;
      this.isLoggedIn = Auth.isLoggedIn;

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

    addOtherOption(option) {
      this.poll.options.push(option);
      this.submitAnswer(option);

      //make update poll request...

    }
  }

  angular.module('appVotingApp')
    .controller('PollCtrl', PollCtrl);

  PollCtrl.$inject = ['pollService', '$state', 'answerService', 'Auth'];
}());
