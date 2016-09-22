const { tail, hasTail } = require('./util')

// string * string -> (string -> string)
// Given two josa options, produces a function that
// determines appropriate one for a given word.
const josa = (josa1, josa2) => w =>
  hasTail(w) ? josa1 : josa2

// string -> string
// Given a word, determines appropriate josa.
const eunNeun     = josa('은',     '는')
const iGa         = josa('이',     '가')
const eulLeul     = josa('을',     '를')
const gwaWa       = josa('과',     '와')
const irangRang   = josa('이랑',   '랑')
const inaNa       = josa('이나',   '나')
const iraseoRaseo = josa('이라서', '라서')
const euroRo = w =>
  tail(w) === 8 ? '로' : josa('으로', '로')(w)
const ieyoYeyo    = josa('이에요', '예요')
const iragoRago   = josa('이라고', '라고')

module.exports = { eunNeun
                 , iGa
                 , eulLeul
                 , gwaWa
                 , irangRang
                 , inaNa
                 , iraseoRaseo
                 , euroRo
                 , ieyoYeyo
                 , iragoRago
                 }
