import { get } from './josaPicker'

// fillInJosa : string -> string
// Fills in the josa placeholders: 친구#{이} 학교#{으로} -> 친구가 학교로
const fillInJosa = str =>
             /*  +++(___ ____ ____)#{---------} */
  str.replace( /(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g
             , (_, noun, josa) => noun + get(josa.trim())(noun)
             )

export default fillInJosa
