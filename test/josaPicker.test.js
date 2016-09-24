const { assert } = require('chai')

const { makeJosaPicker, get } = require('../src/josaPicker')

describe('#Base Functions', () => {
  describe('makeJosaPicker()', () => {
    it('produces a function that determines a josa for a given word.', () => {
      assert.equal(makeJosaPicker('받침O', '받침X')('강'), '받침O')
      assert.equal(makeJosaPicker('받침O', '받침X')('가'), '받침X')
    })
  })

  describe('get()', () => {
    it('throws an error given an unknown josa.', () => {
      assert.throws( () => get('갉')
                   , /Cannot handle this josa/
                   )
    })
  })

  describe('hmm', () => {
    it('initial', () => {
      assert.equal(makeJosaPicker('은', '는')('R.'), '은')
    })
  })
})
