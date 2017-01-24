(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["josa"] = factory();
	else
		root["josa"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fillInJosa = __webpack_require__(1);
	
	var _fillInJosa2 = _interopRequireDefault(_fillInJosa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _fillInJosa2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	             value: true
	});
	
	var _josaPicker = __webpack_require__(2);
	
	// fillInJosa : string -> string
	// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
	var fillInJosa = function fillInJosa(str) {
	             return (
	                          /*  +++(___ ____ ____)#{---------} */
	                          str.replace(/(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g, function (_, noun, josa) {
	                                       return noun + (0, _josaPicker.get)(josa.trim())(noun);
	                          })
	             );
	};
	
	exports.default = fillInJosa;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.get = exports.makeJosaPicker = undefined;
	
	var _jongseong = __webpack_require__(3);
	
	// A Josa is one of:
	//   - '은'  - '는'
	//   - '이'  - '가'
	//   - '을'  - '를'
	//   - '과'  - '와'
	//   - '이었'  - '였'
	//   - '이어'  - '여'
	//   - '이에요'  - '예요'
	//   - '아'  - '야'
	//   - '이'?
	//   - '으로'  - '로'
	
	// A JosaPicker is a fuction: string -> Josa
	//   - Determines josa for a given word.
	
	// table : object
	// State. Manages the josa-pickers.
	var table = {};
	
	// put : Josa * Josa * JosaPicker -> void
	// Effect. Puts f into table with two given names.
	var put = function put(j1, j2, f) {
	  table[j1] = f;
	
	  if (j2) table[j2] = f;
	};
	
	// get : Josa -> JosaPicker
	// Given a josa, returns a josa-picker (if possible).
	// Effect. Searches table for a josa-picker with name josa.
	var get = function get(j) {
	  var f = table[j];
	
	  if (!f) throw new Error('Cannot handle this josa: ' + j);
	
	  return f;
	};
	
	// makeJosaPicker : Josa * Josa -> JosaPicker
	// Given two josa options, produces a josa-picker.
	var makeJosaPicker = function makeJosaPicker(j1, j2) {
	  return function (w) {
	    return (0, _jongseong.hasJongseong)(w) ? j1.replace(/\?$/, '') : j2;
	  };
	};
	
	// install : Josa * Josa * JosaPicker? -> void
	//   - j1 is for a word with a tail consonant.
	//   - j2 is for a word with no tail consonant.
	//   - f is an optional josa-picker for exceptional cases: '으로'
	// Effect. Sets up a josa-picker that chooses between j1 and j2.
	var install = function install(j1, j2, f) {
	  put(j1, j2, f || makeJosaPicker(j1, j2));
	};
	
	install('은', '는');
	install('이', '가');
	install('을', '를');
	install('과', '와');
	install('이었', '였');
	install('이어', '여');
	install('이에요', '예요');
	install('아', '야');
	install('이?', '');
	install('으로', '로', function (w) {
	  return (0, _jongseong.code)(w) === 8 ? '로' : makeJosaPicker('으로', '로')(w);
	});
	
	exports.makeJosaPicker = makeJosaPicker;
	exports.get = get;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	// A JongseongCode is an integer[0...27].
	//   - Each code represents a tail consonants.
	//     code  |  e.g.
	//    -------+------
	//       0   |   가
	//       1   |   각
	//       2   |   갂
	//       3   |   갃
	//       4   |   간
	//       5   |   갅
	//       6   |   갆
	//       7   |   갇
	//       8   |   갈
	//       9   |   갉
	//      10   |   갊
	//      11   |   갋
	//      12   |   갌
	//      13   |   갍
	//      14   |   갎
	//      15   |   갏
	//      16   |   감
	//      17   |   갑
	//      18   |   값
	//      19   |   갓
	//      20   |   갔
	//      21   |   강
	//      22   |   갖
	//      23   |   갗
	//      24   |   갘
	//      25   |   같
	//      26   |   갚
	//      27   |   갛
	
	// _codeForHangul :: string -> JongseongCode
	// Given a Hangul letter, computes its jongseong code.
	// Assume h is a single letter Hangul string (가-힣).
	//   - 44032 (AC00) is the code point of 가, which is the first Hangul letter.
	//   - 28 = the number of the jongseongs + 1
	var _codeForHangul = function _codeForHangul(h) {
	  return (h.charCodeAt(0) - 44032) % 28;
	};
	
	// code :: string -> JongseongCode
	// Given a string of zeros, returns its jongseong code.
	// e.g. _codeForZeros('00') === 1    (100 = 백)
	//   the number |
	//   of zeros   |
	//   -----------+-------
	//       1      |  십
	//       2      |  백
	//       3      |  천
	//     4 ~ 7    |  만
	//     8 ~ 11   |  억
	//    12 ~ 15   |  조
	//    16 ~ 19   |  경
	//    20 ~ 23   |  해
	var _codeForZeros = function _codeForZeros(zs) {
	  var n = zs.length;
	
	  if (n === 1) {
	    return 17;
	  }
	  if (n === 2 || n >= 8 && n <= 11) {
	    return 1;
	  }
	  if (n >= 3 && n <= 7) {
	    return 4;
	  }
	  if (n >= 12 && n <= 15 || n >= 20 && n <= 23) {
	    return 0;
	  }
	  if (n >= 16 && n <= 19) {
	    return 21;
	  }
	
	  throw new Error("It's too large.");
	};
	
	// _codeForDigit :: string -> JongseongCode
	// Given a digit, returns its jongseong code.
	// Assume d is one of: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
	var _codeForDigit = function _codeForDigit(d) {
	  return [21, 8, 0, 16, 0, 0, 1, 8, 8, 0][d];
	};
	
	// _codeForEnglish :: string -> JongseongCode
	// Given a two-letter English string, returns its jongseong code.
	// Assume e is a two-letter English string.
	var _codeForEnglish = function _codeForEnglish(e) {
	  return (/ck/i.test(e) ? 1 : /.n/i.test(e) ? 4 : /ne/i.test(e) ? 4 : /.l/i.test(e) ? 8 : /le/i.test(e) ? 8 : /.m/i.test(e) ? 16 : /ob/i.test(e) ? 17 : /.p/i.test(e) ? 17 : /et/i.test(e) ? 19 : /ng/i.test(e) ? 21 : /* else      */0
	  );
	};
	
	// _codeForEnglishInitial :: string -> JongseongCode
	// Given an English letter, returns its jongseong code.
	// Assume e is a single-letter English string.
	var _codeForEnglishInitial = function _codeForEnglishInitial(e) {
	  switch (e.toLowerCase()) {
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
	
	// code :: string -> JongseongCode
	// Computes the jongseong code of a given string.
	// If there isn't any recognizable letter in word, returns 0 (no jongseong).
	var code = function code(word) {
	  if (!word) {
	    return 0;
	  }
	
	  // !!! Ignore letters inside parentheses.
	  var w = word.replace(/\([^)]*\)$/, '');
	  var last = w[w.length - 1];
	
	  if (/[가-힣]/.test(last)) {
	    return _codeForHangul(last);
	  }
	
	  if (/[1-9]0+$/.test(w)) {
	    var zerosMatch = /0+$/.exec(w);
	
	    return _codeForZeros(zerosMatch[0]);
	  }
	
	  if (/\d/.test(last)) {
	    return _codeForDigit(last);
	  }
	
	  if (/[a-z]{2}$/i.test(w)) {
	    return _codeForEnglish(w.slice(w.length - 2, w.length));
	  }
	
	  if (/(?:^|[^a-z])[a-z]$/i.test(w)) {
	    return _codeForEnglishInitial(last);
	  }
	
	  if (/(^|[^a-z])[a-z][^a-z]?$/i.test(w)) {
	    return _codeForEnglishInitial(w[w.length - 2]);
	  }
	
	  return code(w.slice(0, w.length - 1));
	};
	
	// hasJongseong :: string -> boolean
	// Does the last letter of a given word have a jongseong?
	var hasJongseong = function hasJongseong(w) {
	  return code(w) !== 0;
	};
	
	module.exports = {
	  _codeForHangul: _codeForHangul,
	  _codeForZeros: _codeForZeros,
	  _codeForDigit: _codeForDigit,
	  _codeForEnglish: _codeForEnglish,
	  _codeForEnglishInitial: _codeForEnglishInitial,
	  code: code,
	  hasJongseong: hasJongseong
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map