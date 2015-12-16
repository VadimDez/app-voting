'use strict';

describe('Controller: PollsCtrl', function () {

  // load the controller's module
  beforeEach(module('appVotingApp'));

  var PollCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollCtrl = $controller('PollCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
