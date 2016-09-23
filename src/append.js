const { eunNeun
      , iGa
      , eulLeul
      , gwaWa
      , euroRo
      , ieyoYeyo
      , ieoYeo
      , ieotYeot
      , aYa
      , i
      } = require('./base')

const appendFnTable = {}

const put = (josa1, josa2, f) => {
  appendFnTable[josa1] = f

  if (josa2)
    appendFnTable[josa2] = f
}

// string -> string
// Appends an appropriate josa to the given word.
const appendEunNeun  = w => w + eunNeun(w)
const appendIGa      = w => w + iGa(w)
const appendEulLeul  = w => w + eulLeul(w)
const appendGwaWa    = w => w + gwaWa(w)
const appendEuroRo   = w => w + euroRo(w)
const appendIeyoYeyo = w => w + ieyoYeyo(w)
const appendIeoYeo   = w => w + ieoYeo(w)
const appendIeotYeot = w => w + ieotYeot(w)
const appendAYa      = w => w + aYa(w)
const appendI        = w => w + i(w)

put('은', '는', appendEunNeun)
put('이', '가', appendIGa)
put('을', '를', appendEulLeul)
put('과', '와', appendGwaWa)
put('으로', '로', appendEuroRo)
put('이에요', '예요', appendIeyoYeyo)
put('이어', '여', appendIeoYeo)
put('이었', '였', appendIeotYeot)
put('아', '야', appendAYa)
put('이?', null, appendI)

module.exports = { appendEunNeun
                 , appendIGa
                 , appendEulLeul
                 , appendGwaWa
                 , appendEuroRo
                 , appendIeyoYeyo
                 , appendIeotYeot
                 , appendAYa
                 , appendFnTable
                 , appendI
                 }
