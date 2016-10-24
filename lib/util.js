'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeJosaify = exports.getJosaPicker = undefined;

var _josaPicker = require('./josaPicker');

// A Josaify is a function: string -> string
//   - Produces a given word with a josa appended.

// makeJosaify : Josa -> Josaify
// Given a josa, produces a josaify.
var makeJosaify = function makeJosaify(josa) {
  return function (word) {
    return word + (0, _josaPicker.get)(josa)(word);
  };
};

// getJosaPicker : Josa -> JosaPicker
var getJosaPicker = _josaPicker.get;

exports.getJosaPicker = getJosaPicker;
exports.makeJosaify = makeJosaify;