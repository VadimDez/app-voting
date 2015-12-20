'use strict';

class answerService {
  constructor($http) {
    this.$http = $http;
  }

  post(answer) {
    return this.$http.post('/api/answers', answer);
  }

  get(id, filter) {

    var url = '/api/answers';
    if (id) {
      url += '/' + id;
    }

    return this.$http({
      url: url,
      method: 'GET',
      params: {filter: filter},
      paramSerializer: '$httpParamSerializerJQLike'
    });
  }

  getAggregations(poll) {
    return this.$http.get('/api/answers/aggregate/' + poll);
  }
}

angular.module('appVotingApp')
  .service('answerService', answerService);

answerService.$inject = ['$http'];
