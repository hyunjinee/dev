필드 이름을 바꾸거나 구조를 바꿔서 출력. 또한 컬렉션 내에 들어있는 도큐먼트들을 그룹화하여 숫자를 세는 것이나 서로 다른 두 컬렉션의 정보를 연결해서 출력. 이제 정보를 가공해보자.


## 4.1 효과적인 집계전략 세우기

find 명령어를 몽고디비에 요청했다고 해보자. 쿼리처리기에서 스토리지엔진에 정보를 불러오라는 명령을 보내고, 스토리지 엔진은 장기 저장장치 또는 램에서 정보를 불러온다. 이 후 쿼리 처리기가 정보를 다시 받아 애플리케이션 드라이버로 찾은 정보를 전달해준다. 이런 일련의 과정을 생각할 때 집계 연산은 어느 위치에서 하는것이 더 바람직할까? 가장 좋은 방법은 쿼리 처리기에서 C++로 프로그래밍된 집계연산을 하는 것이다. 집계 파이프라인이 바로 이런 방식을 사용하는데 사용하는 언어의 연산속도도 빠르고, 무엇보다 정보 교환이 따로 없어서 효율적이다. 집계처리를 위해서는 많은 양의 정보를 취합하는 경우가 대부분이다. 이런 많은 양의 정보를 만약 몽고디비내부에서 처리한다면 많은 양의 램 메모리가 필요하지않다. 그러나 만약 자바스크립트 엔진이나 애플리케이션에 정보를 모두 넘기게 된다면 많은 양의 램 메모리가 필요하다. 집계 파이프라인 명령어는 도큐먼트를 순차적으로 받아서 집계처리를 몽고디비 내부에서 하게된다. 이 때문에 상대적으로 적은 메모리로 빠른 속도를 낼 수 있다.맵 리듀스 방식은 집계 파이프라인으로 처리하기 힘든 집계 연산이 필요할 때 사용을 고려해야하고, 두가지 방식 모두 불가능하거나 의미가 없을 때 애플리케이션에서 집계하는 방식을사용해야한다.


## 4.2 맵 리듀스 

맵리듀스 명령어는 집계파이프라인 명령어에 비해 비교적 간단한 구조로 되어있다. 

Map,Reduce,Finalize 함수에서 입력받은 도큐먼트는 this 로 표현된다. 또한 Map함수에서 다음 단계로 도큐먼트를 넘겨주기 위해서는 emit 이라는 특별한 함수를 써야하는데, 첫번째 파라미터로는 그룹핑의 기준을 넣어야하고, 두번째 파라미터로는 다음단계에 넘겨줄 값을 담는다. 

```js
var reducer = function(key, values) {
    return values.length
}

```

리듀스 함수에는 두가지 파라미터를 가지고있다. 


action

