'use strict';

describe('Service: answerService', function () {

  // load the service's module
  beforeEach(module('appVotingApp'));

  // instantiate service
  var answerService;
  beforeEach(inject(function (_answerService_) {
    answerService = _answerService_;
  }));

  it('should do something', function () {
    expect(!!answerService).toBe(true);
  });

});
