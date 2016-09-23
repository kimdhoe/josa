const { assert } = require('chai')

const { tail
      , hasTail
      } = require('../src/tail')

describe('#Tail Consonant Functions', () => {
  describe('tail()', () => {
    it('produces the value of the tail consonant.', () => {
      assert.equal(tail('고'),  0)
      assert.equal(tail('골'),  8)
      assert.equal(tail('곻'), 27)
    })
    it('ignores text inside parentheses.', () => {
      assert.equal(tail('고(골 골)'), '0')
      assert.equal(tail('골(고 고)'), '8')
      assert.equal(tail('둘리(아기 공룡)'), '0')
    })
  })

  describe('hasTail()', () => {
    it('checks whether a given character has a tail consonant.', () => {
      assert.equal(hasTail('나가'), false)
      assert.equal(hasTail('나각'), true)
      assert.equal(hasTail('나갛'), true)
    })
    it('can handle digits.', () => {
      assert.isFalse(hasTail('335'))
      assert.isTrue(hasTail('123'))
      assert.isTrue(hasTail('100'))
      assert.isTrue(hasTail('10'))
      assert.isTrue(hasTail('0'))
    })
  })
})
