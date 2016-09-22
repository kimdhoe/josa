const { assert } = require('chai')

const { eunNeun
      , iGa
      , eulLeul
      , gwaWa
      , irangRang
      , inaNa
      , iraseoRaseo
      , euroRo
      , ieyoYeyo
      , iragoRago
      } = require('../base')

describe('eunNeun', () => {
  it('produces 은 or 는, depending on the given word', () => {
    assert.equal(eunNeun('선생님'), '은')
    assert.equal(eunNeun('친구'),   '는')
    assert.equal(eunNeun('0'),      '은')
    assert.equal(eunNeun('5'),      '는')
  })
})

describe('iGa', () => {
  it('produces 이 or 가, depending on the given word', () => {
    assert.equal(iGa('선생님'), '이')
    assert.equal(iGa('친구'),   '가')
  })
})

describe('eulLeul', () => {
  it('produces 을 or 를, depending on the given word', () => {
    assert.equal(eulLeul('선생님'), '을')
    assert.equal(eulLeul('친구'),   '를')
  })
})

describe('gwaWa', () => {
  it('produces 과 or 와, depending on the given word', () => {
    assert.equal(gwaWa('선생님'), '과')
    assert.equal(gwaWa('친구'),   '와')
  })
})

describe('irangRang', () => {
  it('produces 은 or 는, depending on the given word', () => {
    assert.equal(irangRang('선생님'), '이랑')
    assert.equal(irangRang('친구'),   '랑')
  })
})

describe('inaNa', () => {
  it('produces 이나 or 나, depending on the given word', () => {
    assert.equal(inaNa('선생님'), '이나')
    assert.equal(inaNa('친구'),   '나')
  })
})

describe('iraseoRaseo', () => {
  it('produces 이라서 or 라서, depending on the given word', () => {
    assert.equal(iraseoRaseo('선생님'), '이라서')
    assert.equal(iraseoRaseo('친구'),   '라서')
  })
})

describe('euroRo', () => {
  it('produces 으로 or 로, depending on the given word', () => {
    assert.equal(euroRo('선생님'), '으로')
    assert.equal(euroRo('친구'),   '로')
  })

  it('produces 로, given a word with tail consonant ㄹ', () => {
    assert.equal(euroRo('교실'), '로')
  })
})

describe('ieyoYeyo', () => {
  it('produces 이에요 or 예요, depending on the given word', () => {
    assert.equal(ieyoYeyo('선생님'), '이에요')
    assert.equal(ieyoYeyo('친구'),   '예요')
  })
})

describe('iragoRago', () => {
  it('produces 이라고 or 라고, depending on the given word', () => {
    assert.equal(iragoRago('선생님'), '이라고')
    assert.equal(iragoRago('친구'),   '라고')
  })
})
