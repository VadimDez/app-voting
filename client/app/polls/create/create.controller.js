'use strict';

class PollCreateCtrl {
  constructor(pollService, $state) {
    this.pollService = pollService;
    this.$state = $state;
    this.poll = {
      question: '',
      options: ['', '']
    };

    this.optionCount = [0, 0];
  }

  addOption() {
    this.optionCount.push(0);
  }

  create() {
    this.pollService.create(this.poll).then((data) => {
      this.$state.go('polls/poll', {id: data.data[0]._id});
    });
  }
}

angular.module('appVotingApp')
  .controller('PollCreateCtrl', PollCreateCtrl);

PollCreateCtrl.$inject = ['pollService', '$state'];

//function PollCreateCtrl(pollService, $state) {
//  var vm = this;
//  this.addOption = addOption;
//  this.create = create;
//  this.poll = {
//    question: '',
//    options: ['', '']
//  };
//
//  this.optionCount = [0, 0];
//
//  function addOption() {
//    vm.optionCount.push(0);
//  }
//
//  function create() {
//    pollService.create(vm.poll).then((data) => {
//      $state.go('polls/poll', {id: data.data[0]._id});
//    });
//  }
//}
