const { appendFnTable } = require('./append')

// string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
const fillInJosa = str =>
  str.replace( /(\S+)#\{(\S+)\}/g
             , (_, word, josa) => appendFnTable[josa](word)
             )

module.exports = fillInJosa
