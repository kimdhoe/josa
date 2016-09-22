const { assert } = require('chai')

const { tail
      , hasTail
      , eunNeun
      , iGa
      , eulLeul
      , gwaWa
      , irangRang
      , inaNa
      , iraseoRaseo
      , euroRo

      , addEunNeun
      , addIGa
      , addEulLeul
      , addGwaWa
      , addIrangRang
      , addInaNa
      , addIraseoRaseo
      , addEuroRo

      , fillInJosa
} = require('../index')

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


describe('addEunNeun', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(addEunNeun('선생님'), '선생님은')
    assert.equal(addEunNeun('친구'),   '친구는')
  })
})

describe('addIGa', () => {
  it('appends 이/가 to the given word', () => {
    assert.equal(addIGa('선생님'), '선생님이')
    assert.equal(addIGa('친구'),   '친구가')
  })
})

describe('addEulLeul', () => {
  it('appends 을/를 to the given word', () => {
    assert.equal(addEulLeul('선생님'), '선생님을')
    assert.equal(addEulLeul('친구'),   '친구를')
  })
})

describe('addGwaWa', () => {
  it('appends 과/와 to the given word', () => {
    assert.equal(addGwaWa('선생님'), '선생님과')
    assert.equal(addGwaWa('친구'),   '친구와')
  })
})

describe('addIrangRang', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(addIrangRang('선생님'), '선생님이랑')
    assert.equal(addIrangRang('친구'),   '친구랑')
  })
})

describe('addInaNa', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(addInaNa('선생님'), '선생님이나')
    assert.equal(addInaNa('친구'),   '친구나')
  })
})

describe('addIraseoRaseo', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(addIraseoRaseo('선생님'), '선생님이라서')
    assert.equal(addIraseoRaseo('친구'),   '친구라서')
  })
})

describe('addEuroRo', () => {
  it('appends 은/는 to the given word', () => {
    assert.equal(addEuroRo('선생님'), '선생님으로')
    assert.equal(addEuroRo('친구'),   '친구로')
  })

  it('appends 로 to a given word with tail consonant ㄹ', () => {
    assert.equal(addEuroRo('교실'), '교실로')
  })
})


describe('fillInJosa', () => {
  it('replaces the placeholders with appropriate josas', () => {
    assert.equal( fillInJosa('선생님#{는} 집#{로} 간다')
                , '선생님은 집으로 간다'
                )
    assert.equal( fillInJosa('친구#{은} 학교#{으로} 간다')
                , '친구는 학교로 간다'
                )
    assert.equal( fillInJosa('2#{은} 3#{로}')
                , '2는 3으로'
                )
  })

  it('does nothing if there is no word before a placeholder', function () {
    assert.equal( fillInJosa('#{은} #{으로} 간다')
                , '#{은} #{으로} 간다'
                )
  })
})


