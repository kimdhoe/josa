const { assert } = require('chai')

const { appendEunNeun
      , appendIGa
      , appendEulLeul
      , appendGwaWa
      , appendIrangRang
      , appendInaNa
      , appendIraseoRaseo
      , appendEuroRo
      , appendIeyoYeyo
      , appendIragoRago
      } = require('../append')

describe('appendEunNeun', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(appendEunNeun('선생님'), '선생님은')
    assert.equal(appendEunNeun('친구'),   '친구는')
  })
})

describe('appendIGa', () => {
  it('appends 이/가 to the given word', () => {
    assert.equal(appendIGa('선생님'), '선생님이')
    assert.equal(appendIGa('친구'),   '친구가')
  })
})

describe('appendEulLeul', () => {
  it('appends 을/를 to the given word', () => {
    assert.equal(appendEulLeul('선생님'), '선생님을')
    assert.equal(appendEulLeul('친구'),   '친구를')
  })
})

describe('appendGwaWa', () => {
  it('appends 과/와 to the given word', () => {
    assert.equal(appendGwaWa('선생님'), '선생님과')
    assert.equal(appendGwaWa('친구'),   '친구와')
  })
})

describe('appendIrangRang', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(appendIrangRang('선생님'), '선생님이랑')
    assert.equal(appendIrangRang('친구'),   '친구랑')
  })
})

describe('appendInaNa', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(appendInaNa('선생님'), '선생님이나')
    assert.equal(appendInaNa('친구'),   '친구나')
  })
})

describe('appendIraseoRaseo', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(appendIraseoRaseo('선생님'), '선생님이라서')
    assert.equal(appendIraseoRaseo('친구'),   '친구라서')
  })
})

describe('appendEuroRo', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(appendEuroRo('선생님'), '선생님으로')
    assert.equal(appendEuroRo('친구'),   '친구로')
  })

  it('appends 로 to a given word with tail consonant ㄹ', () => {
    assert.equal(appendEuroRo('교실'), '교실로')
  })
})

