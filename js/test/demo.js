var assert = require('assert');

var squareModule = require('../square.js');

describe('integers', function () {
    it('should square the numbers', function (done) {
        assert.equal(squareModule(2), 4);
        assert.equal(squareModule(3), 9);
        
        done();
    });
});