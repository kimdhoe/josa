// string -> number
// Does c have a tail consonant?
// Assume c is a one-letter Hangul string.
const tailHangul = c =>
  (c.charCodeAt(0) - 44032) % 28

// string -> number
// Does d have a tail consonant?
// Assume d is a one-letter digit.
const tailDigit = d => {
  switch (d) {
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

// string -> number
// Does cc have a tail consonant?
// Assume cc is a two-letter English string.
const tailEnglish = cc =>
  /.n/i.test(cc) ?  4 :
  /ne/i.test(cc) ?  4 :
  /.l/i.test(cc) ?  8 :
  /le/i.test(cc) ?  8 :
  /.m/i.test(cc) ? 16 :
  /.p/i.test(cc) ? 17 :
  /et/i.test(cc) ? 19 :
  /ng/i.test(cc) ? 21 :
  /* else */        0

const tailEnglishInitial = c => {
  switch (c.toLowerCase()) {
    case 'l':
    case 'r': return  8
    case 'm': return 16
    case 'n': return  4
    default:  return  0
  }
}

// string -> number
// Produces the value of tail consonant of the last character.
// The return value 0 means no tail consonant.
//   - http://gernot-katzers-spice-pages.com/var/korean_hangul_unicode.html
const tail = w0 => {
  // Ignore text inside parentheses.
  const w = w0.replace(/\([^)]*\)$/, '')

  const last = w[w.length - 1]

  if (!/[가-힣a-z0-9]/i.test(last))
    return tail(w.slice(0, w.length - 1))

  if (/[가-힣]/.test(last))
    return tailHangul(last)

  if (/\d/.test(last))
    return tailDigit(last)

  if (/[a-z]{2}$/i.test(w))
    return tailEnglish(w.slice(w.length - 2, w.length))

  if (/[a-z][^a-z]?$/i.test(w))
    return tailEnglishInitial(last)

  return -1
}

// string -> boolean
// Does the last character of a given word have a tail consonant?
const hasTail = w =>
  tail(w) !== 0

module.exports = { tailHangul
                 , tailDigit
                 , tailEnglish
                 , tailEnglishInitial
                 , tail
                 , hasTail
                 }
