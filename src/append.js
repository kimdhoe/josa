const { eunNeun, iGa
      , eulLeul
      , gwaWa
      , irangRang
      , inaNa
      , euroRo
      , ieyoYeyo
      , ieoYeo
      , ieotYeot
      , iraRa
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
const appendEunNeun   = w => w + eunNeun(w)
const appendIGa       = w => w + iGa(w)
const appendEulLeul   = w => w + eulLeul(w)
const appendGwaWa     = w => w + gwaWa(w)
const appendIrangRang = w => w + irangRang(w)
const appendInaNa     = w => w + inaNa(w)
const appendEuroRo    = w => w + euroRo(w)
const appendIeyoYeyo  = w => w + ieyoYeyo(w)
const appendIeoYeo    = w => w + ieoYeo(w)
const appendIeotYeot  = w => w + ieotYeot(w)
const appendIraRa     = w => w + iraRa(w)
const appendIyuYu     = w => w + iyuYu(w)
const appendAYa       = w => w + aYa(w)
const appendIsiyuSiyu = w => w + isiyuSiyu(w)

put('은', '는', appendEunNeun)
put('이', '가', appendIGa)
put('을', '를', appendEulLeul)
put('과', '와', appendGwaWa)
put('이랑', '랑', appendIrangRang)
put('이나', '나', appendInaNa)
put('으로', '로', appendEuroRo)
put('이에요', '예요', appendIeyoYeyo)
put('이어', '여', appendIeoYeo)
put('이었', '였', appendIeotYeot)
put('이라', '라', appendIraRa)
put('-아', '-야', appendAYa)
put('-이여', '-여', appendIyuYu)
put('-이시여', '-시여', appendIsiyuSiyu)

module.exports = { appendEunNeun
                 , appendIGa
                 , appendEulLeul
                 , appendGwaWa
                 , appendIrangRang
                 , appendInaNa
                 , appendEuroRo
                 , appendIeyoYeyo
                 , appendIeotYeot
                 , appendIraRa
                 , appendAYa
                 , appendIyuYu
                 , appendFnTable
                 }
