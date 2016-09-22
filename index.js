// string -> number
// Produces the value of tail consonant of the last character.
// The return value 0 means no tail consonant.
//   - http://gernot-katzers-spice-pages.com/var/korean_hangul_unicode.html
const tail = w =>
  (w.charCodeAt(w.length - 1) - 44032) % 28

// string -> boolean
// Does the last character of a given word have a tail consonant?
const hasTail= w => {
  const lastChar = w[w.length - 1]

  if (lastChar.match(/\d/)) {
    if ('2459'.indexOf(lastChar) < 0)
      return true
    return false
  }

  return tail(w) !== 0
}

// string * string -> (string -> string)
// Given two josa options, produces a function that
// determines appropriate one for a given word.
const josa = (josa1, josa2) => w =>
  hasTail(w) ? josa1 : josa2

// string -> string
// Given a word, determines appropriate josa.
const eunNeun     = josa('은', '는')
const iGa         = josa('이', '가')
const eulLeul     = josa('을', '를')
const gwaWa       = josa('과', '와')
const irangRang   = josa('이랑',   '랑')
const inaNa       = josa('이나',   '나')
const iraseoRaseo = josa('이라서', '라서')
const euroRo = w =>
  tail(w) === 8 ? '로' : josa('으로', '로')(w)

// string -> string
// Appends an appropriate josa to the given word.
const addEunNeun     = w => w + eunNeun(w)
const addIGa         = w => w + iGa(w)
const addEulLeul     = w => w + eulLeul(w)
const addGwaWa       = w => w + gwaWa(w)
const addIrangRang   = w => w + irangRang(w)
const addInaNa       = w => w + inaNa(w)
const addIraseoRaseo = w => w + iraseoRaseo(w)
const addEuroRo      = w => w + euroRo(w)

const table = { '은':     addEunNeun
              , '는':     addEunNeun
              , '이':     addIGa
              , '가':     addIGa
              , '을':     addEulLeul
              , '를':     addEulLeul
              , '과':     addGwaWa
              , '와':     addGwaWa
              , '이랑':   addIrangRang
              , '랑':     addIrangRang
              , '이나':   addInaNa
              , '나':     addInaNa
              , '이라서': addIraseoRaseo
              , '라서':   addIraseoRaseo
              , '으로':   addEuroRo
              , '로':     addEuroRo
              }

// string -> string
// Fills in the josa placeholders.
const fillInJosa = str =>
  str.replace( /(\S+)#\{(\S+)\}/g
             , (_, p1, p2) => table[p2](p1)
             )

module.exports = { tail
                 , hasTail
                 , eunNeun
                 , iGa
                 , eulLeul
                 , gwaWa
                 , irangRang
                 , inaNa
                 , iraseoRaseo
                 , euroRo

                 , addEunNeun
                 , addIGa
                 , addEulLeul
                 , addGwaWa
                 , addIrangRang
                 , addInaNa
                 , addIraseoRaseo
                 , addEuroRo

                 , fillInJosa
                 }
