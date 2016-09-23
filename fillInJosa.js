const { appendFnTable } = require('./append')

// string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
const fillInJosa = str =>
             /*  +++(___ ____ ____)#{---------} */
  str.replace( /(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g
             , (_, word, josa) => {
                 const appendJosa = appendFnTable[josa.trim()]

                 if (!appendJosa)
                    throw new Error(`Cannot handle this josa: ${josa}`)

                 return appendJosa(word)
               }
             )

module.exports = fillInJosa
