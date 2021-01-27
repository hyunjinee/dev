# Global Object

이 객체들은 모든 모듈에서 이용 할 수 있다. 이 객체 중 일부는 실제로 전역 범위를 가지지 않고 모듈 범위를 가진다.

## global

- {Object} 전역 네임스페이스 객체

브라우저에서 최상위 범위는 전역범위이다. 이는 브라우저의 전역범위에서 var something가 전역 변수를 정의한다는 것을 의미한다. Node에서는 다르다. 최상위 범위는 전역 범위가 아니다. Node모듈에서 var someting는 해당 모듈의 지역 범위가 된다.

## process

- {Object}
  process 객체 process object 부분보기

## console

- {Object}
  stdout와 stderr에 출력하는데 사용한다. console 부분 보기

## Class: Buffer

- {Function}
  바이너리 데이터를 다루는 데 사용한다. buffer section 부분 보기

## require()

- {Function}
  모듈을 require한다. Module 부분 보기
  require는 실제로 전역이 아니라 각 모듈의 지역 범위이다.

## require.reslove()

모듈의 위치를 검색하는데 내부 require() 장치 (machinery)를 사용한다. 모듈을 로딩하는 것이 아니라 처리된 파일명을 반환할 뿐이다.

## require.cache

- Object
  모듈을 require 했을 때 모듈은 이 객체에 캐시된다. 이 객체에서 킷값을 삭제하면 다음번 require에서 해당 모듈을 다시 로드 할 것이다.

## \_\_filename

- {String}

실행되는 코드의 파일명이다. 이 코드 파일을 처리한 절대 경로이다. 메인 프로그램에서 이는 커맨드라인에서 사용한 것과 반드시 같은 파일명은 아니다. 모듈 내부에서 이 값은 해당 모듈 파일에 대한 경로이다.

예제: /Users/mjr 에서 node example.js실행

```javascript
console.log(__filename);
// /Users/mjs/example.js
```

\_\_filename은 실제로 전역이 아니라 각 모듈의 지역 범위이다.

## \_\_dirname

- String

현재 실행되는 스크립트가 존재하는 디렉터리 이름이다.

예제: /Users/mjr 에서 node example.js실행

```javascript
console.log(__dirname);
// /Users/mjr
```

\_\_dirname 은 실제로 전역이 아니라 각 모듈의 지역 범위이다.

## module

- {Object}

현재 모듈에 대한 참조이다. 특히, module.exports는 모듈이 무엇을 외부에 노출해서 require()로 사용할 수 있게 할 것인지 정의하는데 사용한다.
module는 실제로 전역이 아니라 각 모듈의 지역범위이다.
