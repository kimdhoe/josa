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

  if (lastChar.match(/\d/))
    return ('2459'.indexOf(lastChar) < 0)

  return tail(w) !== 0
}

module.exports = { tail
                 , hasTail
                 }
