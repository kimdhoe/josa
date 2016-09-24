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

// State. Manages the josa-pickers.
const table = {}

// Josa * Josa -> JosaPicker
// Given two josa options, produces a josa-picker.
const josaPicker = (josa1, josa2) => w =>
  hasTail(w) ? josa1.replace(/\?$/, '') : josa2

// Josa * Josa * JosaPicker? -> void
// Effect. Puts a josa-picker created from josa1 and josa2 into table.
//   - josa1 is for a word with a tail consonant.
//   - josa2 is for a word with no tail consonant.
//   - g is optional josa-picker for an exceptional case: '으로'
const put = (josa1, josa2, g) => {
  const f = g || josaPicker(josa1, josa2)

  table[josa1] = f

  if (josa2)
    table[josa2] = f
}

// Josa -> JosaPicker
// Given a josa, returns a josa-picker.
// Effect. Searches table for a josa-picker with name josa.
const get = josa => {
  const josaPicker = table[josa]

  if (!josaPicker)
    throw new Error(`Cannot handle this josa: ${josa}`)

  return josaPicker
}

put('은', '는')
put('이', '가')
put('을', '를')
put('과', '와')
put('이었', '였')
put('이어', '여')
put('이에요', '예요')
put('아', '야')
put('이?', '')
put('으로', '로', w => tail(w) === 8 ? '로' : josaPicker('으로', '로')(w))

module.exports = { josaPicker
                 , get
                 }
