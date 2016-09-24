const { tail, hasTail } = require('./tail')

// A Josa is one of:
//   - 은
//   + 는
//   - 이
//   + 가
//   - 을
//   + 를
//   - 과
//   + 와
//   - 이었
//   + 였
//   - 이어
//   + 여
//   - 이에요
//   + 예요
//   - 아
//   + 야
//   - 이?
//   - 으로
//   + 로

// A JosaPicker is a fuction: string -> Josa
//   - Determines josa for a given string.

// table : object
// State. Manages the josa-pickers.
const table = {}

// put : Josa * Josa * JosaPicker -> void
// Effect. Puts f into table with two given names josa1 and josa2.
const put = (josa1, josa2, f) => {
  table[josa1] = f

  if (josa2)
    table[josa2] = f
}

// get : Josa -> JosaPicker
// Given a josa, returns a josa-picker.
// Effect. Searches table for a josa-picker with name josa.
const get = josa => {
  const f = table[josa]

  if (!f)
    throw new Error(`Cannot handle this josa: ${josa}`)

  return f
}

// makeJosaPicker : Josa * Josa -> JosaPicker
// Given two josa options, produces a josa-picker.
const makeJosaPicker = (josa1, josa2) => w =>
  hasTail(w) ? josa1.replace(/\?$/, '') : josa2

// install : Josa * Josa * JosaPicker? -> void
//   - josa1 is for a word with a tail consonant.
//   - josa2 is for a word with no tail consonant.
//   - g is optional josa-picker for an exceptional case: '으로'
// Effect. Puts a josa-picker created from josa1 and josa2 into table.
const install = (josa1, josa2, g) => {
  const f = g || makeJosaPicker(josa1, josa2)

  put(josa1, josa2, f)
}

install('은', '는')
install('이', '가')
install('을', '를')
install('과', '와')
install('이었', '였')
install('이어', '여')
install('이에요', '예요')
install('아', '야')
install('이?', '')
install('으로', '로', w => tail(w) === 8 ? '로' : makeJosaPicker('으로', '로')(w))

module.exports = { makeJosaPicker
                 , get
                 }
