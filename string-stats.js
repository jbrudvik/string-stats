
(function(root, undefined) {

  /**
   * Utilities for calculating statistics about strings
   */
  var stringStats = {};

  // Export the stringStats object in both Node and browser environments
  // Explicitly require dependencies in Node
  var _ = root._;
  if (typeof exports !== 'undefined') { // Node
    exports = module.exports = stringStats;
    _ = require('underscore');
  } else { // Browser
    root.stringStats = stringStats;
  }

  /**
   * Regex matching at least one "alphanumeric" character.
   *
   * Includes extended Latin, Greek, Coptic, Cyrillic, Armenian, Hebrew, Syriac, Arabic.
   */
  stringStats.containsAlphanumericCharacterRegex = new RegExp('[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u024F\u0374-\u058F\u05D0-\u05F4\u0622-\u0669\u066E-\u06D3\u06D5\u06EE-\u06FF\u0710-\u072F\u074D-\u074F\u0750-\u077F]+');

  /**
   * Return true if string parameter contains at least one "alphanumeric" character.
   *
   * @param {String} s
   */
  stringStats.containsAlphanumericCharacter = function (s) {
    return this.containsAlphanumericCharacterRegex.test(s);
  };

  /**
   * Return the number of visible words in a string.
   *
   * Words contain at least one alphanumeric character.
   *
   * @param {String} s
   */
  stringStats.wordCount = function (s) {
    if (!s || !s.length) {
      return 0;
    }

    // Consider a groups of newline whitespace to be one space each
    s = s.replace(/[\n\r]+/g, ' ');

    // Strip out control characters
    s = s.replace(/[\x00-\x1f]/g, '');

    // Remove leading and trailing whitespace, to be safe
    s = s.trim();

    // Split string on all whitespace into words
    var words = s.split(/\s+/);

    // Keep only words containing at least on alphanumeric character
    words = _.filter(words, this.containsAlphanumericCharacter.bind(this));

    // Filter out falsy contents (e.g., empty words)
    words = _.compact(words);

    return words.length;
  };

  /**
   * Return the number of visible characters in a string
   *
   * @param {String} s
   */
  stringStats.characterCount = function(s) {
    if (!s || !s.length) {
      return 0;
    }

    // Consider a groups of newline whitespace to be one space each
    s = s.replace(/[\n\r]+/g, ' ');

    // Strip out control characters
    s = s.replace(/[\x00-\x1f]/g, '');

    return s.length;
  };

})(this);
