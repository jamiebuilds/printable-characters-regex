# printable-characters-regex [![Build Status](https://travis-ci.org/thejameskyle/printable-characters-regex.svg?branch=master)](https://travis-ci.org/thejameskyle/printable-characters-regex)

> Regex for validating printable characters


## Install

```
$ npm install --save printable-characters-regex
```


## Usage

```js
const printableCharactersRegex = require('printable-characters-regex');

printableCharactersRegex.test('@abc123!');
//=> true

printableCharactersRegex.test('‹πé≤å≥¿');
//=> false
```


## License

MIT © [James Kyle](https://github.com/thejameskyle)
