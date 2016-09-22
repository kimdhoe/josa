const { assert } = require('chai')

const fillInJosa = require('../fillInJosa')

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
    assert.equal( fillInJosa('친구#{은} 선생님#{예요}')
                , '친구는 선생님이에요'
                )
    assert.equal( fillInJosa('저 사람#{는} 아무개#{이라고} 한다')
                , '저 사람은 아무개라고 한다'
                )
  })

  it('does nothing if there is no word before a placeholder', function () {
    assert.equal( fillInJosa('#{은} #{으로} 간다')
                , '#{은} #{으로} 간다'
                )
  })
})
