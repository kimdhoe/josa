import { tail, hasTail } from './tail'

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
const table = {}

// put : Josa * Josa * JosaPicker -> void
// Effect. Puts f into table with two given names.
const put = (j1, j2, f) => {
  table[j1] = f

  if (j2)
    table[j2] = f
}

// get : Josa -> JosaPicker
// Given a josa, returns a josa-picker (if possible).
// Effect. Searches table for a josa-picker with name josa.
const get = j => {
  const f = table[j]

  if (!f)
    throw new Error(`Cannot handle this josa: ${j}`)

  return f
}

// makeJosaPicker : Josa * Josa -> JosaPicker
// Given two josa options, produces a josa-picker.
const makeJosaPicker = (j1, j2) => w =>
  hasTail(w) ? j1.replace(/\?$/, '') : j2

// install : Josa * Josa * JosaPicker? -> void
//   - j1 is for a word with a tail consonant.
//   - j2 is for a word with no tail consonant.
//   - f is an optional josa-picker for exceptional cases: '으로'
// Effect. Sets up a josa-picker that chooses between j1 and j2.
const install = (j1, j2, f) => {
  put(j1, j2, f || makeJosaPicker(j1, j2))
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

export { makeJosaPicker
       , get
       }
