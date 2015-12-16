'use strict';

angular.module('appVotingApp')
  .controller('PollCreateCtrl', PollCreateCtrl);

PollCreateCtrl.$inject = ['$scope', 'pollService'];

function PollCreateCtrl($scope, pollService) {
  var vm = this;
  this.addOption = addOption;
  this.create = create;
  this.poll = {
    question: '',
    options: ['', '']
  };

  this.optionCount = [0, 0];

  function addOption() {
    vm.optionCount.push(0);
  }

  function create() {
    pollService.create(vm.poll);
  }
}
