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

  create(pollData) {
    return this.$http.post('/api/polls', pollData);
  }

  getMine() {
    return this.$http.get('/api/polls/mine');
  }

  remove(id) {
    return this.$http.delete('/api/polls/' + id);
  }
}

angular.module('appVotingApp')
  .service('pollService', PollService);
