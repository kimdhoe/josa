import { assert } from 'chai'

import { makeJosaify } from '../src/util'

describe('makeJosaify()', () => {
  it('produces a function that josaifies a given word.', () => {
    const josaify = makeJosaify('을')

    assert.isFunction(josaify)
    assert.equal(josaify('수박'), '수박을')
    assert.equal(josaify('사과'), '사과를')

    const josaify2 = makeJosaify('이?')

    assert.equal(josaify2('새'), '새')
    assert.equal(josaify2('사슴'), '사슴이')
  })
})
