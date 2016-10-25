'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// A TailConsonant is an integer[0, 27].
//   - There are 27 possible tail consonants.
//   - 0 means no tail consonant.
//   - http://gernot-katzers-spice-pages.com/var/korean_hangul_unicode.html

// tailHangul : string -> TailConsonant
// Produces the tail-consonant of c.
// Assume c is a single-letter Hangul string.
//   - 44032 (AC00) is code-point of the first Hangul letter, which is 가.
//   - 28 = the number of possible tail consonants + 1
var tailHangul = function tailHangul(c) {
  return (c.charCodeAt(0) - 44032) % 28;
};

// tailDigit : string -> TailConsonant
// Produces the tail-consonant of d.
// Assume d is a single-letter digit.
var tailDigit = function tailDigit(d) {
  return [21, 8, 0, 16, 0, 0, 1, 8, 8, 0][d];
};

// tailEnglish : string -> TailConsonant
// Produces the tail-consonant of cc.
// Assume cc is a two-letter English string.
var tailEnglish = function tailEnglish(cc) {
  return (/.n/i.test(cc) ? 4 : /ne/i.test(cc) ? 4 : /.l/i.test(cc) ? 8 : /le/i.test(cc) ? 8 : /.m/i.test(cc) ? 16 : /.p/i.test(cc) ? 17 : /et/i.test(cc) ? 19 : /ng/i.test(cc) ? 21 :
    /* else */0
  );
};

// tailEnglishInitial : string -> TailConsonant
// Produces the tail-consonant of c.
// Assume c is a single-letter English string.
var tailEnglishInitial = function tailEnglishInitial(c) {
  switch (c.toLowerCase()) {
    case 'l':
    case 'r':
      return 8;
    case 'm':
      return 16;
    case 'n':
      return 4;
    default:
      return 0;
  }
};

// tail : string -> TailConsonant
// Produces the tail-consonant of the last letter.
// If there isn't any recognizable letter, produces 0 (no tail-consonant).
var tail = function tail(word) {
  if (!word) return 0;

  // Ignore text inside parentheses.
  var w = word.replace(/\([^)]*\)$/, '');
  var last = w[w.length - 1];

  if (/[가-힣]/.test(last)) return tailHangul(last);

  if (/\d/.test(last)) return tailDigit(last);

  if (/[a-z]{2}$/i.test(w)) return tailEnglish(w.slice(w.length - 2, w.length));

  if (/(?:^|[^a-z])[a-z]$/i.test(w)) return tailEnglishInitial(last);

  if (/(^|[^a-z])[a-z][^a-z]?$/i.test(w)) return tailEnglishInitial(w[w.length - 2]);

  return tail(w.slice(0, w.length - 1));
};

// hasTail : string -> boolean
// Does the last letter of a given word have a tail consonant?
var hasTail = function hasTail(w) {
  return tail(w) !== 0;
};

exports.tailHangul = tailHangul;
exports.tailDigit = tailDigit;
exports.tailEnglish = tailEnglish;
exports.tailEnglishInitial = tailEnglishInitial;
exports.tail = tail;
exports.hasTail = hasTail;