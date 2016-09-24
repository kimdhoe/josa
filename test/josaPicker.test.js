const { assert } = require('chai')

const { josaPicker, get } = require('../src/josaPicker')

describe('#Base Functions', () => {
  describe('josaPicker()', () => {
    it('produces a function that determines a josa for a given word.', () => {
      assert.equal(josaPicker('받침O', '받침X')('강'), '받침O')
      assert.equal(josaPicker('받침O', '받침X')('가'), '받침X')
    })
  })

  describe('get()', () => {
    it('throws an error given an unknown josa.', () => {
      assert.throws( () => get('갉')
                   , /Cannot handle this josa/
                   )
    })
  })
})
