'use strict';

Object.defineProperty(exports, "__esModule", {
             value: true
});

var _josaPicker = require('./josaPicker');

// fillInJosa : string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
var fillInJosa = function fillInJosa(str) {
             return (
                          /*  +++(___ ____ ____)#{---------} */
                          str.replace(/(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g, function (_, word, josa) {
                                       return word + (0, _josaPicker.get)(josa.trim())(word);
                          })
             );
};

exports.default = fillInJosa;