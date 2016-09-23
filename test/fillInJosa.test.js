const { assert } = require('chai')

const fillInJosa = require('../src/fillInJosa')

describe('fillInJosa()', () => {
  it('replaces the placeholders with appropriate josas.', () => {
    assert.equal( fillInJosa('2#{은} 7#{는} 선생님#{는} 친구#{은}')
                , '2는 7은 선생님은 친구는'
                )
    assert.equal( fillInJosa('2#{이} 7#{가} 선생님#{가} 친구#{이}')
                , '2가 7이 선생님이 친구가'
                )
    assert.equal( fillInJosa('2#{을} 3#{를} 친구#{을} 선생님#{를}')
                , '2를 3을 친구를 선생님을'
                )
    assert.equal( fillInJosa('2#{으로} 7#{으로} 10#{로} 친구#{로} 선생님#{로}')
                , '2로 7로 10으로 친구로 선생님으로'
                )
    assert.equal( fillInJosa('2#{과} 7#{와} 선생님#{와} 친구#{과}')
                , '2와 7과 선생님과 친구와'
                )
    assert.equal( fillInJosa('2#{예요} 7#{예요} 선생님#{예요} 친구#{이에요}')
                , '2예요 7이에요 선생님이에요 친구예요'
                )
    assert.equal( fillInJosa('2#{이어}서 7#{여} 친구#{이어}서 선생님#{여}서는')
                , '2여서 7이어 친구여서 선생님이어서는'
                )
    assert.equal( fillInJosa('2#{이었}고 8#{였}는데 친구#{이었}던 선생님#{였}다')
                , '2였고 8이었는데 친구였던 선생님이었다'
                )
    assert.equal( fillInJosa('아무개#{아} 홍길동#{야}')
                , '아무개야 홍길동아'
                )
    assert.equal( fillInJosa('2#{이?}나 7#{이?}나 선생님#{이?}나 친구#{이?}나')
                , '2나 7이나 선생님이나 친구나'
                )
    assert.equal( fillInJosa('2#{이?}라고 7#{이?}라 친구#{이?}라서 선생님#{이?}라는')
                , '2라고 7이라 친구라서 선생님이라는'
                )
    assert.equal( fillInJosa('아무개#{이?}여 홍길동#{이?}여')
                , '아무개여 홍길동이여'
                )
    assert.equal( fillInJosa('아무개#{이?}시여 홍길동#{이?}시여')
                , '아무개시여 홍길동이시여'
                )
    assert.equal( fillInJosa('선생님#{이?}랑 친구#{이?}랑')
                , '선생님이랑 친구랑'
                )
    assert.equal( fillInJosa('선생님#{이?}다 친구#{이?}다')
                , '선생님이다 친구다'
                )
  })

  it('ignores words inside parentheses.', () => {
    assert.equal( fillInJosa('친구(홍길동)#{이} 온다')
                , '친구(홍길동)가 온다'
                )
    assert.equal( fillInJosa('둘리(아기 공룡)#{은}')
                , '둘리(아기 공룡)는'
                )
  })

  it('does nothing if there is no word before a placeholder.', () => {
    assert.equal( fillInJosa('#{은} #{으로} 간다')
                , '#{은} #{으로} 간다'
                )
  })

  it('throws an error when encountered an unknown josa.', () => {
    assert.throws( () => fillInJosa('한글#{가나다}')
                 , /Cannot handle this josa: 가나다/
                 )
  })
})
