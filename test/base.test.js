const { assert } = require('chai')

const { josaPicker
      , eunNeun
      , iGa
      , eulLeul
      , gwaWa
      , euroRo
      , ieyoYeyo
      , ieotYeot
      , ieoYeo
      , aYa
      , i
      } = require('../src/base')

describe('#Base Functions', () => {
  describe('josaPicker()', () => {
    it('produces a function that determines a josa for a given word.', () => {
      assert.equal(josaPicker('은', '는')('선생님'), '은')
    })
  })

  describe('#Josa Pickers', () => {
    describe('eunNeun()', () => {
      it('produces "은" or "는", depending on the given word.', () => {
        assert.equal(eunNeun('선생님'), '은')
        assert.equal(eunNeun('친구'), '는')
        assert.equal(eunNeun('0'), '은')
        assert.equal(eunNeun('5'), '는')
        assert.equal(eunNeun('선생님(아무개)'), '은')
      })
    })

    describe('iGa()', () => {
      it('produces "이" or "가", depending on the given word.', () => {
        assert.equal(iGa('선생님'), '이')
        assert.equal(iGa('친구'), '가')
      })
    })

    describe('eulLeul()', () => {
      it('produces "을" or "를", depending on the given word.', () => {
        assert.equal(eulLeul('선생님'), '을')
        assert.equal(eulLeul('친구'), '를')
      })
    })

    describe('gwaWa()', () => {
      it('produces "과" or "와", depending on the given word.', () => {
        assert.equal(gwaWa('선생님'), '과')
        assert.equal(gwaWa('친구'), '와')
      })
    })

    describe('euroRo()', () => {
      it('produces "으로" or "로", depending on the given word.', () => {
        assert.equal(euroRo('선생님'), '으로')
        assert.equal(euroRo('친구'), '로')
      })

      it('produces "로", given a word with tail consonant ㄹ.', () => {
        assert.equal(euroRo('교실'), '로')
        assert.equal(euroRo('1'), '로')
        assert.equal(euroRo('7'), '로')
      })
    })

    describe('ieyoYeyo()', () => {
      it('produces "이에요" or "예요", depending on the given word.', () => {
        assert.equal(ieyoYeyo('선생님'), '이에요')
        assert.equal(ieyoYeyo('친구'), '예요')
      })
    })

    describe('ieotYeot()', () => {
      it('produces "이었" or "였", depending on the given word.', () => {
        assert.equal(ieotYeot('선생님'), '이었')
        assert.equal(ieotYeot('친구'), '였')
      })
    })

    describe('ieoYeo()', () => {
      it('produces "이어" or "여", depending on the given word.', () => {
        assert.equal(ieoYeo('선생님'), '이어')
        assert.equal(ieoYeo('친구'), '여')
      })
    })

    describe('aYa()', () => {
      it('produces "아" or "야", depending on the given word.', () => {
        assert.equal(aYa('길동'), '아')
        assert.equal(aYa('철수'), '야')
      })
    })

    describe('i()', () => {
      it('produces "이" or "", depending on the given word.', () => {
        assert.equal(i('왕'), '이')
        assert.equal(i('나그네'), '')
      })
    })
  })
})
