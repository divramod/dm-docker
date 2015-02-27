var should = require('chai').should();
var dm-docker = require('../index');
var start = dm-docker.start;

describe('Start', function() {
    it('should return String "start"', function() {
        start().should.equal('start');
    });
});
