const { assert } = require('chai')

const { tailHangul
      , tailDigit
      , tailEnglish
      , tailEnglishInitial
      , tail
      , hasTail
      } = require('../src/tail')

describe('#Tail Consonant Functions', () => {
  describe('tailHangul()', () => {
    it('produces tail consonant value of a given Hangul letter.', () => {
      assert.equal(tailHangul('가'),  0)
      assert.equal(tailHangul('갈'),  8)
      assert.equal(tailHangul('갛'), 27)
    })
  })

  describe('tailDigit()', () => {
    it('produces tail consonant value of a given digit.', () => {
      assert.equal(tailDigit('0'), 21)
      assert.equal(tailDigit('1'),  8)
      assert.equal(tailDigit('2'),  0)
      assert.equal(tailDigit('3'), 16)
      assert.equal(tailDigit('4'),  0)
      assert.equal(tailDigit('5'),  0)
      assert.equal(tailDigit('6'),  1)
      assert.equal(tailDigit('7'),  8)
      assert.equal(tailDigit('8'),  8)
      assert.equal(tailDigit('9'),  0)
    })
  })

  describe('tailEnglish()', () => {
    it('produces tail consonant value of the given two-letter Eng string.', () => {
      assert.equal(tailEnglish('ge'),  0)
      assert.equal(tailEnglish('al'),  8)
      assert.equal(tailEnglish('et'), 19)
    })
  })

  describe('tailEnglishInitial()', () => {
    it('produces tail consonant value of the given two-letter Eng string.', () => {
      assert.equal(tailEnglishInitial('l'),  8)
      assert.equal(tailEnglishInitial('r'),  8)
      assert.equal(tailEnglishInitial('m'), 16)
      assert.equal(tailEnglishInitial('n'),  4)
      assert.equal(tailEnglishInitial('a'),  0)
    })
  })

  describe('tail()', () => {
    it('throws an error given an empty string.', () => {
      assert.throws(
        () => tail('')
      , "There's no letter that can possibly have a tail consonant: "
      )
      assert.throws(
        () => tail('!@#')
      , "There's no letter that can possibly have a tail consonant: !@#"
      )
    })
    it('produces tail consonant value.', () => {
      assert.equal(tail('고'),  0)
      assert.equal(tail('골'),  8)
      assert.equal(tail('곻'), 27)
    })
    it('can handle digits.', () => {
      assert.equal(tail('337'),  8)
      assert.equal(tail('125'),  0)
      assert.equal(tail('100'), 21)
    })
    it('ignores text inside parentheses.', () => {
      assert.equal(tail('고(골)'), '0')
      assert.equal(tail('골(고)'), '8')
      assert.equal(tail('둘리(아기 공룡)'), '0')
    })
    it('finds tail consonant of the last Hangul/digit/English letter.', () => {
      assert.equal(tail('가가-_-'),  0)
      assert.equal(tail('가갛^_^'), 27)
    })
  })

  describe('hasTail()', () => {
    describe('Given a Hangul string:', () => {
      it('checks the presence of tail consonant.', () => {
        assert.isFalse(hasTail('나가'))
        assert.isTrue(hasTail('나각'))
        assert.isTrue(hasTail('나갛'))
      })
    })

    describe('Given a digit string:', () => {
      it('checks the presence of tail consonant.', () => {
        assert.isFalse(hasTail('335'))
        assert.isTrue(hasTail('123'))
        assert.isTrue(hasTail('100'))
        assert.isTrue(hasTail('10'))
      })
    })

    describe('Given a English string:', () => {
      it('checks the presence of tail consonant.', () => {
        assert.isTrue(hasTail('arrival'))
        assert.isFalse(hasTail('attendance'))
        assert.isTrue(hasTail('education'))
        assert.isFalse(hasTail('departure'))
        assert.isFalse(hasTail('agreement'))
        assert.isFalse(hasTail('age'))
        assert.isTrue(hasTail('landing'))
        assert.isFalse(hasTail('ceremony'))
        assert.isFalse(hasTail('happiness'))
        assert.isTrue(hasTail('idealism'))
        assert.isFalse(hasTail('death'))
        assert.isFalse(hasTail('burglar'))
        assert.isTrue(hasTail('comedienne'))
        assert.isFalse(hasTail('engineer'))
      })
    })

    describe('Given a English initial string:', () => {
      it('checks the presence of tail consonant.', () => {
        assert.isTrue(hasTail('r'))
        assert.isFalse(hasTail('x'))
        assert.isFalse(hasTail('W.H.O'))
        assert.isTrue(hasTail('D.S.L'))
      })
    })
  })
})
