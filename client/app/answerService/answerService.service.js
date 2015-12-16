'use strict';

class AnswerService {
  constructor($http) {
    this.$http = $http;
  }

  post(answer) {
    return this.$http.post('/api/answers', answer);
  }
}

angular.module('appVotingApp')
  .service('answerService', AnswerService);

AnswerService.$inject = ['$http'];
