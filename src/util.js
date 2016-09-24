const { get } = require('./josaPicker')

const makeJosaify = josa => word =>
  word + get(josa)(word)

const getJosaPicker = get

module.exports = { getJosaPicker
                 , makeJosaify
                 }
