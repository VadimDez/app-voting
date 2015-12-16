'use strict';

describe('Service: pollService', function () {

  // load the service's module
  beforeEach(module('appVotingApp'));

  // instantiate service
  var pollService;
  beforeEach(inject(function (_pollService_) {
    pollService = _pollService_;
  }));

  it('should do something', function () {
    expect(!!pollService).toBe(true);
  });

});
