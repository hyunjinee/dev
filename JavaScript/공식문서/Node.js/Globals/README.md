# Global Object

이 객체들은 모든 모듈에서 이용 할 수 있다. 이 객체 중 일부는 실제로 전역 범위를 가지지 않고 모듈 범위를 가진다.

## global

- {Object} 전역 네임스페이스 객체

브라우저에서 최상위 범위는 전역범위이다. 이는 브라우저의 전역범위에서 var something가 전역 변수를 정의한다는 것을 의미한다. Node에서는 다르다. 최상위 범위는 전역 범위가 아니다. Node모듈에서 var someting는 해당 모듈의 지역 범위가 된다.

## process

- {Object}
  process 객체 process object 부분보기
