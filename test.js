
/* global describe:false, it:false */

var expect = require('chai').expect;
var stringStats = require('./string-stats');

describe('string-stats', function() {
  it('should count one word', function() {
    expect(stringStats.wordCount('hello')).to.equal(1);
  });
});

