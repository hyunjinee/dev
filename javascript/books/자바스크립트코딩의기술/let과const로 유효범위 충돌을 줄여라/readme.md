값이 변경되는 경우 가장 좋은 선택은 let이다.

변수를 다룰 때는 재할당을 피하는 것이 낫다. 그렇지만 변수를 반드시 재할당해야하는 경우라면 어떻게 해야할까? 이경우에는 바로 let 을 사용할 수 있다.

var 은 어휘적 유효범위 lexical 스코프를 갖는 반면, let은 블록 유효범위를 따른다. 
블록 밖에서는 블록 유효범위 변수에 접근할 수 없다. 

let 과 const 는 같은 이름의 변수를 다시 선언할 수 없다. var 를 사용하는 경우에는 같으 ㄴ유효범위에서 같은 이름의 변수를 다시선언할 수도 있다. var 를 사용할 때 의도치 않게 변수이름을 재사용하면  큰 문제가 발생할 수도 있다. 그렇지만 let을 사용하면 이러한 실수를 안할 수 있다. 