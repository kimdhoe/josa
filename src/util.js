const { get } = require('./josaPicker')

// A Josaify is a function: string -> string
//   - Produces a given word with a josa appended.

// makeJosaify : Josa -> Josaify
// Given a josa, produces a josaify function.
const makeJosaify = josa => word =>
  word + get(josa)(word)

// getJosaPicker : Josa -> JosaPicker
const getJosaPicker = get

module.exports = { getJosaPicker
                 , makeJosaify
                 }
