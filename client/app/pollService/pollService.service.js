'use strict';

class PollService {

  constructor($http) {
    this.$http = $http;
  }

  get(id) {
    if (id) {
      return this.$http.get('/api/polls/' + id);
    }

    return this.$http.get('/api/polls');
  }

  last(amount) {
    return this.$http.get('/api/polls', {limit: amount});
  }

  create(pollData) {
    return this.$http.post('/api/polls', pollData);
  }

  getMine() {
    return this.$http.get('/api/polls/mine');
  }

  remove(id) {
    return this.$http.delete('/api/polls/' + id);
  }

  update(poll) {
    delete poll.user;
    return this.$http.put('/api/polls/' + poll._id, poll);
  }
}

angular.module('appVotingApp')
  .service('pollService', PollService);
