const { get } = require('./josaPicker')

// string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
const fillInJosa = str =>
             /*  +++(___ ____ ____)#{---------} */
  str.replace( /(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g
             , (_, word, josa) => word + get(josa.trim())(word)
             )

module.exports = fillInJosa
