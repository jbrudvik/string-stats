
/* global describe:false, it:false */

var expect = require('chai').expect;
var stringStats = require('./string-stats');

describe('string-stats', function() {

  describe('characterCount()', function() {
    it('should count characters', function () {
      expect(stringStats.characterCount('hello')).to.equal(5);
    });

    it('should count Arabic characters', function() {
      expect(stringStats.characterCount('حبيبي')).to.equal(5);
    });

    it('should not ignore spaces', function() {
      expect(stringStats.characterCount(' he l          lo')).to.equal(17);
    });

    it('should count newlines as one character', function() {
      expect(stringStats.characterCount('\n')).to.equal(1);
    });

    it('should count consecutive newlines as one character total', function() {
      expect(stringStats.characterCount('\n\n')).to.equal(1);
      expect(stringStats.characterCount('\n\n\n')).to.equal(1);
    });

    it('should count characters in multiple Arabic words', function() {
      expect(stringStats.characterCount('حبيبي صحتان')).to.equal(11);
    });

    it('should count Greek characters', function() {
      expect(stringStats.characterCount('λφ φλ')).to.equal(5);
    });

    it('should count characters with diacritics', function() {
      expect(stringStats.characterCount('ééé é éé äöüß')).to.equal(13);
    });

    it('should count punctuation', function() {
      expect(stringStats.characterCount('hello — there')).to.equal(13);
    });

    it('should count characters in code snippet', function() {
      expect(stringStats.characterCount('var foo = \'bar\';')).to.equal(16);
    });
  });

  describe('wordCount()', function() {
    it('should count 1 word as 1', function() {
      expect(stringStats.wordCount('hello')).to.equal(1);
    });

    it('should count 1 Arabic word as 1', function() {
      expect(stringStats.wordCount('حبيبي')).to.equal(1);
    });

    it('should count 2 Arabic words as 2', function() {
      expect(stringStats.wordCount('حبيبي صحتان')).to.equal(2);
    });

    it('should count words with Greek letters', function() {
      expect(stringStats.wordCount('λφ φλ')).to.equal(2);
    });

    it('should count words with diacritics', function() {
      expect(stringStats.wordCount('ééé é éé äöü')).to.equal(4);
    });

    it('should not count punctuation as words', function() {
      expect(stringStats.wordCount('hello — there')).to.equal(2);
    });

    it('should count only words in snippet of code', function() {
      expect(stringStats.wordCount('var foo = \'bar\';')).to.equal(3);
    });
  });

  describe('containsAlphanumericCharacter()', function() {
    it('should return true for letter-only word', function() {
      expect(stringStats.containsAlphanumericCharacter('hello')).to.be.true;
    });

    it('should return true for word containing one letter and otherwise punctuation', function() {
      expect(stringStats.containsAlphanumericCharacter('!!?a!#$%^&*')).to.be.true;
    });

    it('should return true for word containing one number and otherwise punctuation', function() {
      expect(stringStats.containsAlphanumericCharacter('!!!1!!!!!!!')).to.be.true;
    });

    it('should return true for one Arabic character', function() {
      expect(stringStats.containsAlphanumericCharacter('س')).to.be.true;
    });

    it('should return true for one diacritic-containing character', function() {
      expect(stringStats.containsAlphanumericCharacter('ü')).to.be.true;
    });

    it('should return false for word containing only punctuation', function() {
      expect(stringStats.containsAlphanumericCharacter('!!?!#$%^&*')).to.be.false;
    });

    it('should return false for word containing only punctuation and spaces', function() {
      expect(stringStats.containsAlphanumericCharacter('!!?!    #$%^ &*')).to.be.false;
    });
  });
});
