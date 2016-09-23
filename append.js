const { eunNeun, iGa
      , eulLeul
      , gwaWa
      , irangRang
      , inaNa
      , iraseoRaseo
      , euroRo
      , ieyoYeyo
      , iragoRago
      , aYa
      , iyuYu
      , isiyuSiyu
      } = require('./base')

const appendFnTable = {}

const put = (josa1, josa2, f) => {
  appendFnTable[josa1] = appendFnTable[josa2] = f
}

// string -> string
// Appends an appropriate josa to the given word.
const appendEunNeun     = w => w + eunNeun(w)
const appendIGa         = w => w + iGa(w)
const appendEulLeul     = w => w + eulLeul(w)
const appendGwaWa       = w => w + gwaWa(w)
const appendIrangRang   = w => w + irangRang(w)
const appendInaNa       = w => w + inaNa(w)
const appendIraseoRaseo = w => w + iraseoRaseo(w)
const appendEuroRo      = w => w + euroRo(w)
const appendIeyoYeyo    = w => w + ieyoYeyo(w)
const appendIragoRago   = w => w + iragoRago(w)
const appendIyuYu       = w => w + iyuYu(w)
const appendAYa         = w => w + aYa(w)
const appendIsiyuSiyu   = w => w + isiyuSiyu(w)

put('은', '는', appendEunNeun)
put('이', '가', appendIGa)
put('을', '를', appendEulLeul)
put('과', '와', appendGwaWa)
put('이랑', '랑', appendIrangRang)
put('이나', '나', appendInaNa)
put('이라서', '라서', appendIraseoRaseo)
put('으로', '로', appendEuroRo)
put('이에요', '예요', appendIeyoYeyo)
put('이라고', '라고', appendIragoRago)
put('아', '야', appendAYa)
put('이여', '여', appendIyuYu)
put('이시여', '시여', appendIsiyuSiyu)

module.exports = { appendEunNeun
                 , appendIGa
                 , appendEulLeul
                 , appendGwaWa
                 , appendIrangRang
                 , appendInaNa
                 , appendIraseoRaseo
                 , appendEuroRo
                 , appendIeyoYeyo
                 , appendIragoRago
                 , appendAYa
                 , appendIyuYu
                 , appendFnTable
                 }
