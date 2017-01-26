<div align="center">
  <h1>josa</h1>

  <p>
    <a href="https://travis-ci.org/kimdhoe/josa">
      <img src="https://img.shields.io/travis/kimdhoe/josa.svg" alt="Travis">
    </a>
    <a href="https://codecov.io/gh/kimdhoe/josa">
      <img src="https://img.shields.io/codecov/c/github/kimdhoe/josa.svg" alt="Codecov">
    </a>
    <a href="https://github.com/kimdhoe/josa/blob/master/LICENSE.md">
      <img src="https://img.shields.io/github/license/kimdhoe/josa.svg" alt="license">
    </a>
    <br>
    <a href="https://www.npmjs.com/package/josa">
      <img src="https://img.shields.io/npm/v/josa.svg" alt="npm">
    </a>
    <a href="http://standardjs.com/">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide">
    </a>
    <a href="http://makeapullrequest.com">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs Welcome">
    </a>
  </p>
  <p>
    프로그램에서 한글을 사용할 때 마주치는 문제 중 하나는 명사가 동적으로 생성되는 경우 조사도 이에 맞춰 동적으로 결정되어야 한다는 점입니다. <strong>josa</strong>는 이 문제를 해결하기 위한 라이브러리로, 입력받은 명사의 형태에 적법한 조사를 찾아줍니다.
  </p>
</div>

## 설치

```shell
npm install --save josa
```

## 사용법

### Node.js

``` javascript
// ES2015 module
import { josa, getJosaPicker, makeJosaify } from 'josa'

// CommonJS
const { josa, getJosaPicker, makeJosaify } = require('josa')
```

```javascript
josa('친구#{이} 선생님#{와} 함께 학교#{으로} 간다.')
// => '친구가 선생님과 함께 학교로 간다.'

const book = getBookFromSomewhere()

josa(`${book.title}#{는} ${book.author}#{이} 쓴 책이고, ISBN은 ${book.isbn}#{예요}.`)
// => '자연의 이야기들은 쥘 르나르가 쓴 책이고, ISBN은 xxxxxxxxxxxx3이에요.'

josa('숫자#{이} 3#{가} 되었다.')
// => '숫자가 3이 되었다.'

josa('값#{가} 7#{으로} 바뀐다.')
// => '값이 7로 바뀐다.'
```

### UMD

- `/dist/index.umd.js`
- `/dist/index.umd.min.js`

### 테스트 REPL

Josa의 주 함수가 받은 문자열을 어떻게 바꾸는지 간편하게 시험해볼 수 있는 REPL 형식의 웹 어플리케이션입니다.

https://kimdhoe.github.io/josa-app

- `↑`: 이전 입력
- `↓`: 다음 입력
- `command-k` / `ctrl-l`: 화면 초기화
- `ctrl-u`: 입력창 초기화

## API

- [`josa`](#josastr)
- [`getJosaPicker`](#getjosapickerjosa)
- [`makeJosaify`](#makejosaifyjosa)

### josa(sentence)

조사 플레이스홀더가 포함된 문자열을 입력받아 완성된 문자열을 반환합니다.

- 바로 앞의 명사에 따라 플레이스홀더가 적절한 조사로 바뀌거나 없어집니다.
  - `커피#{은} ==> 커피는`
  - `커피#{는} ==> 커피는`
  - `커피#{이?}다 ==> 커피다`

- 플레이스홀더는 해시(`#`) 기호가 붙은 중괄호로 표기하며, 선행명사와 플레이스홀더 사이에 공백이 없어야 합니다.

- 플레이스홀더 앞에 소괄호(`(`, `)`)로 묶인 글이 올 때 조사의 형태는 괄호 앞의 단어에 따릅니다.
  - `둘리(아기 공룡)#{은} ==> 둘리(아기 공룡)는`

- 선행명사가 숫자나 영어 알파벳으로 끝나는 경우도 지원합니다.
  - `15 더하기 10#{는} 25#{이에요} ==> 15 더하기 10은 25예요`
  - `apple#{는} ==> apple은`
  - `tiger#{과} ==> tiger와`
  - `A.P.I.#{이} ==> A.P.I.가`
  - `L#{를} ==> L을`

#### sentence

- _Required_
- Type: `string`

#### 플레이스홀더

##### 은/는 ( `#{은}` / `#{는}` )

```javascript
josa('호랑이#{은} 사슴#{는}')
// => '호랑이는 사슴은'

josa('호랑이#{은}커녕 사슴#{는}커녕')
// => '호랑이는커녕 사슴은커녕'
```

##### 이/가 ( `#{이}` / `#{가}` )

```javascript
josa('호랑이#{이} 사슴#{가}')
// => '호랑이가 사슴이'
```

##### 을/를 ( `#{을}` / `#{를}` )

```javascript
josa('호랑이#{을} 사슴#{를}')
// => '호랑이를 사슴을'
```

##### 와/과 ( `#{와}` / `#{과}` )

```javascript
josa('호랑이#{과} 사슴#{와} 너구리')
// => '호랑이와 사슴과 너구리'
```

##### 이어/여 ( `#{이어}` / `#{여}` )

```javascript
josa('호랑이#{이어}서 사슴#{여}서')
// => '호랑이여서 사슴이어서'
```

##### 으로/로 ( `#{으로}` / `#{로}` )

```javascript
josa('여기#{으로}부터 집#{로} 희의실#{으로}')
// => '여기로부터 집으로 회의실로'
```

##### 이에요/예요 ( `#{이에요}` / `#{예요}` )

```javascript
josa('여우#{이에요} 사슴#{예요}')
// => '여우예요 사슴이에요'
```

##### 이었/였 ( `#{이었}` / `#{였}` )

```javascript
josa('호랑이#{이었}는데 사슴#{였}나')
// => '호랑이였는데 사슴이었나'
```

##### 아/야 ( `#{아}` / `#{야}` )

```javascript
josa('두꺼비#{아} 밝은 달#{야}')
// => '두꺼비야 밝은 달아'
```

##### 이/- ( `#{이?}` )

여러 상황에서 쓰일 수 있는 플레이스홀더로, `'이'` 혹은 빈 문자열로 바뀝니다.

```javascript
josa('개#{이?}라고 사슴#{이?}라는데')
// => '개라고 사슴이라는데'

josa('개#{이?}고 사슴#{이?}다')
// => '개고 사슴이다'

josa('개#{이?}요 사슴#{이?}요')
// => '개요 사슴이요'

josa('개#{이?}나 사슴#{이?}나')
// => '개나 사슴이나'

josa('개#{이?}든 사슴#{이?}든')
// => '개든 사슴이든'

josa('개#{이?}랑 사슴#{이?}랑')
// => '개랑 사슴이랑'

josa('개#{이?}란 사슴#{이?}란')
// => '개란 사슴이란'

josa('개#{이?}나마 사슴#{이?}나마')
// => '개나마 사슴이나마'

josa('개#{이?}야말로 사슴#{이?}야말로')
// => '개야말로 사슴이야말로'

josa('하늘#{이?}시여 부처#{이?}시여')
// => '하늘이시여 부처시여'

josa('왕#{이?}여 나그네#{이?}여')
// => '왕이여 나그네여'
```

### getJosaPicker(josa)

명사에 맞는 조사를 찾아주는 함수를 반환합니다. 예를 들면, 임의의 명사에 대해 _을_과 _를_ 중 하나를 선택하는 함수가 필요할 때 사용할 수 있습니다.

#### josa

- _Required_
- Type: `string`

지원하는 조사 중 하나. (예: _은_, _는_, _이_, _가_, _이?_, ...)
두 개의 선택지 중 아무 것이나 사용가능.

```javascript
const eulLeul = getJosaPicker('을')  // 혹은 getJosaPicker('를')

eulLeul('치킨')  // => '을'
eulLeul('콜라')  // => '를'
```

### makeJosaify(josa)

명사에 조사를 붙이는 함수를 반환합니다.

#### josa

- _Required_
- Type: `string`

지원하는 조사 중 하나. (예: _은_, _는_, _이_, _가_, _이?_, ...)
두 개의 선택지 중 아무 것이나 사용가능.

```javascript
const eulLeulify = makeJosaify('을')  // 혹은 makeJosaify('를')

eulLeulify('치킨')  // => '치킨을'
eulLeulify('콜라')  // => '콜라를'
```

## 테스트

```shell
npm install

npm test
```

## 라이센스

MIT © Kim Donghee
