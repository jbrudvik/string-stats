[![Bower version](http://img.shields.io/bower/v/string-stats.svg)](https://github.com/jbrudvik/string-stats)

  - [stringStats](#stringstats)
  - [stringStats.containsAlphanumericCharacterRegex](#stringstatscontainsalphanumericcharacterregex)
  - [stringStats.containsAlphanumericCharacter()](#stringstatscontainsalphanumericcharacter)
  - [stringStats.wordCount()](#stringstatswordcount)
  - [stringStats.characterCount()](#stringstatscharactercount)

## stringStats

  Utilities for calculating statistics about strings

## stringStats.containsAlphanumericCharacterRegex

  Regex matching at least one "alphanumeric" character.
  
  Includes extended Latin, Greek, Coptic, Cyrillic, Armenian, Hebrew, Syriac, Arabic.

## stringStats.containsAlphanumericCharacter()

  Return true if string parameter contains at least one "alphanumeric" character.

## stringStats.wordCount()

  Return the number of visible words in a string.
  
  Words contain at least one alphanumeric character.

## stringStats.characterCount()

  Return the number of visible characters in a string

# Generating documentation

    $ npm install -g dox
    $ ./generate-docs
