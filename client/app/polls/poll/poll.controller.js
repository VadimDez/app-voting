'use strict';

(function() {
  class PollCtrl {

    constructor(pollService, $state, answerService, Auth) {
      this.pollService = pollService;
      this.answerService = answerService;
      this.isLoggedIn = Auth.isLoggedIn;
      this.hasAnswered = false;

      // get poll info
      this.pollService.get($state.params.id)
        .then(data => {
          this.poll = data.data;
        });

      // check answer
      this.answerService.get(null, {poll: $state.params.id}).then((data) => {
        this.hasAnswered = (data.data.length > 0);
        if (this.hasAnswered) {
          this.getAggregations($state.params.id);
        }
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
        this.hasAnswered = true;
        this.getAggregations(this.poll._id);
      });
    }

    addOtherOption(option) {
      this.poll.options.push(option);

      //make update poll request...
      this.pollService.update(this.poll)
        .then(() => {
          this.submitAnswer(option);
        });
    }

    getAggregations(pollId) {
      this.answerService.getAggregations(pollId)
        .then(data => {
          this.setUpAggregationChart(data.data);
        });
    }

    setUpAggregationChart(data) {
      this.aggregationData = [];
      this.aggregationLabels = [];

      data.forEach(row => {
        this.aggregationData.push(row.total);
        this.aggregationLabels.push(row._id);
      });
    }
  }

  angular.module('appVotingApp')
    .controller('PollCtrl', PollCtrl);

  PollCtrl.$inject = ['pollService', '$state', 'answerService', 'Auth'];
}());
