const { tail, hasTail } = require('./tail')

// string * string -> (string -> string)
// Given two josa options, produces a function that
// determines appropriate one for a given word.
const josaPicker = (josa1, josa2) => w =>
  hasTail(w) ? josa1 : josa2

// string -> string
// Given a word, determines appropriate josa.
const eunNeun   = josaPicker('은', '는')
const iGa       = josaPicker('이', '가')
const eulLeul   = josaPicker('을', '를')
const gwaWa     = josaPicker('과', '와')
const irangRang = josaPicker('이랑', '랑')
const inaNa     = josaPicker('이나', '나')
const ieyoYeyo  = josaPicker('이에요', '예요')
const iyeotYeot = josaPicker('이었', '였')
const iraRa     = josaPicker('이라', '라')
const aYa       = josaPicker('아', '야')
const iyuYu     = josaPicker('이여', '여')
const isiyuSiyu = josaPicker('이시여', '시여')
// exeptional case: 저기로, 회의실로, 방으로
// When the tail consonant is ㄹ, '로' is chosen, not '으로'.
const euroRo = w =>
  tail(w) === 8 ? '로' : josaPicker('으로', '로')(w)

module.exports = { josaPicker
                 , eunNeun
                 , iGa
                 , eulLeul
                 , gwaWa
                 , irangRang
                 , inaNa
                 , euroRo
                 , ieyoYeyo
                 , iyeotYeot
                 , iraRa
                 , aYa
                 , iyuYu
                 , isiyuSiyu
                 }
