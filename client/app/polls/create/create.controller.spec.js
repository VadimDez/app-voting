'use strict';

describe('Controller: PollCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('appVotingApp'));

  var PollCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollCreateCtrl = $controller('PollCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
