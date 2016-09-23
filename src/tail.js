// string -> number
// Produces the value of tail consonant of the last character.
// The return value 0 means no tail consonant.
//   - http://gernot-katzers-spice-pages.com/var/korean_hangul_unicode.html
const tail = w0 => {
  // Ignore text inside parentheses.
  const w    = w0.replace(/\([^)]*\)$/, '')
  const last = w[w.length - 1]

  if (/\d$/.test(last)) {
    switch (last) {
      case '2':
      case '4':
      case '5':
      case '9': return  0
      case '1':
      case '7':
      case '8': return  8
      case '0': return 21
      case '3': return 16
      case '6': return  1
    }
  }

  return (w.charCodeAt(w.length - 1) - 44032) % 28
}

// string -> boolean
// Does the last character of a given word have a tail consonant?
const hasTail= w =>
  tail(w) !== 0

module.exports = { tail
                 , hasTail
                 }
