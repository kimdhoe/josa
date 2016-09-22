const { assert } = require('chai')

const { tail
      , hasTail
      } = require('../util')

describe('tail', () => {
  it('produces the value of the tail consonant', () => {
    assert.equal(tail('고'),  0)
    assert.equal(tail('골'),  8)
    assert.equal(tail('곻'), 27)
  })
})

describe('hasTail', () => {
  it('checks whether a given character has a tail consonant', () => {
    assert.equal(hasTail('나가'), false)
    assert.equal(hasTail('나각'), true)
    assert.equal(hasTail('나갛'), true)
  })

  it('can handle digits (naively)', () => {
    assert.isFalse(hasTail('335'))
    assert.isTrue(hasTail('123'))
    assert.isTrue(hasTail('100'))
    assert.isTrue(hasTail('10'))
    assert.isTrue(hasTail('0'))
  })
})
