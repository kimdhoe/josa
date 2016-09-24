const { assert } = require('chai')

const { makeJosaify } = require('../src/util')

describe('makeJosaify()', () => {
  it('produces a function that josaifies a given word.', () => {
    const josaify = makeJosaify('을')

    assert.isFunction(josaify)
    assert.equal(josaify('수박'), '수박을')
    assert.equal(josaify('사과'), '사과를')
  })
})
