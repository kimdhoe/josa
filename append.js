const { eunNeun
      , iGa
      , eulLeul
      , gwaWa
      , irangRang
      , inaNa
      , iraseoRaseo
      , euroRo
      , ieyoYeyo
      , iragoRago
      } = require('./base')

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

const appendFnTable = { '은': appendEunNeun
                      , '는': appendEunNeun
                      , '이': appendIGa
                      , '가': appendIGa
                      , '을': appendEulLeul
                      , '를': appendEulLeul
                      , '과': appendGwaWa
                      , '와': appendGwaWa
                      , '이랑': appendIrangRang
                      , '랑': appendIrangRang
                      , '이나': appendInaNa
                      , '나': appendInaNa
                      , '이라서': appendIraseoRaseo
                      , '라서': appendIraseoRaseo
                      , '으로': appendEuroRo
                      , '로': appendEuroRo
                      , '이에요': appendIeyoYeyo
                      , '예요': appendIeyoYeyo
                      , '이라고': appendIragoRago
                      , '라고': appendIragoRago
                      }

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
                 , appendFnTable
                 }
