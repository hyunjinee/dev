# 값

## 2.1 배열

js 배열은 타입이 엄격한 다른 언어와달리 문자열, 숫자,객체 심지어 다른배열이나 어떤 타입의 값이라도 담을 수 있는 그릇이다.

배열 크기를 미리 정하지 않고도 선언할 수 있으며 원하는 값을 추가하면 된다.

배열 값에 delete연산자를 적용하면 슬롯을 제거할 수 있지만 마지막 원소까지 제거해도 length 프로퍼티 값까지 바뀌지 않는다는 것을 주의하자.


```js
let a = [];
a[0] = 1
a[2] = 3

a[1] ; // undefined

a.length; //3 
```

실행은 되지만 이러한 코드에서 주간에 건너뛴 빈슬롯은 혼란을 부추길 수 있다. a[1]슬롯값은 응당 undefined가 될 것 같지만 명시적으로 a[1]= undefined 세팅한 것과 똑같지는 않다.

배열 인덱스는 숫자인데 배열 자체도 하나의 객체여서 키 프로퍼티 문자열을 추가할 수 있다.
하지만 배열 length 가 증가하지 않는다는 점이 다소 까다롭다.

```js

var a = [];

a[0] = 1;

a["foobar"] = 2;
a.length; // 1
a["foobar"];  // 2

a.foobar //2
```


그런데 키로 넣은 문자열 값이 표준 10진수 숫자로 타입이 바뀌면, 마치 문자열 키가 아닌 숫자키를 사용한 것과같은 결과가 초래된다는 점은 정말 주의해야하는 함정이다.
```js
var a = [];
a['13'] = 42;

a.length;  // 14

```

일반적으로 배열에 문자열 타입의 키/프로퍼티를 두는 것은 추천하지 않는다. 그렇게 해야한다면 객체를 대용하고 배열 원소의 인덱스는 확실히 숫자만 쓰자.

### 2.1.1 유사 배열

유사 배열을 진짜 배열로 바꾸고싶을 때가 있다. 이럴 때는 배열 유틸리티 함수를   사용하여 해결하는 것이 일반적이다. 예를 들어 DOM 쿼리 작업을 수행하면 비록 배열은 아니지만 변환 용도로 충분한 유사배열 형태의 DOM원소 리스트가반환된다. 다른 예로 함수에서 arguments객체를 사용하여 인자를 리스트로 가져오는 것도 마찬가지이다. 
이러한 변환은  slice 함수의 기능을 차용하는 방법을 가장 많이 쓴다.

```js
function foo() {
    var arr = Array.prototype.slice.call(arguments);
    arr.push("bam")
    console.log(arr);
}

foo("bar" , "baz") // ["bar", "baz", "bam"]
```

예제 코드에서 알 수 있듯이  slice 함수에 인자가 없으면 기본 인자값으로 구성된 배열을 복사한다.

ES6부터는 Array.from() 이 이일을 대신한다.

```js
var arr = Array.from(arguments)
```

## 2.2 문자열

흔히 문자열은 단지 문자의 배열이라고 생각한다. 엔진이 내부적으로 배열을 쓰도록 구현되어있는지는 모르지만 자바스크립트 문자열은 실제로 생김새만 비슷할 뿐 문자 배열과 같지 않다는 사실을 알아야한다.

문자열은 배열과 겉모습이 닮았다. 
문자열은 불변값이지만 배열은 가변 값이다. a[1] 처럼 문자열의 특정문자를 접근하는 형태가 모든 자바스크립트 엔진에서 유효한 것은 아니다. 실제로 인터넷 익스플로러 구버전은 이를 문법 에러로 인식한다. a.charAt(1)으로 접근해야 맞다.

한가지더, 문자열은 불변값이므로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환한다. 문자열은 불변값이므로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열을 생성한 후 반환한다. 반면에 대부분의 배열 메서드는 그 자리에서 곧바로 원소를 수정한다.

그리고 문자열을 다룰 때 유용한 대부분의 메서드는 사실상 문자열에 쓸 수 없지만, 문자열에 대해 불변 배열 메서드를 빌려 쓸 수 는 있다.

배열에는 reverse()라는 가변 메서드가 준비되어있지만 문자열은 그렇지 않다.불행히도 문자열은 불변값이라 바로 변경되지 않으므로 배열의  가변 메서드는 통하지 않고 그래서 빌려쓰는 것 또한 안된다.

a.split("").reverse().join('')

문자열 자체에 어떤 작업을 빈번하게 수행하는 경우라면 관점을 달리하여 문자열을 문자단위로 저장하는 배열로 취급하는 것이 더 나을 수도 있다. 

## 2.3 숫자

자바스크립트의 숫자 타입은 number가 유일하며 정수, 부동소수점 숫자를 모두 아우른다. 모든 숫자를 number타입 하나로만 표기한다.
사실상 모든 스크립트 언어를 통틀어 대부분 현대 프로그래밍 언어는 IEEE 754 표준을 따른다. 자바스크립트 number도  IEEE 754 표준을 따르며, 그중에서도 정확히는 배정도 표준 포맷을 사용한다.

웹서핑을 하다보면 이진 부동 소수점 숫자가 메모리에 저장되는 방식과 그렇게 설계된 의미는 무엇인지 시시콜콜 자세히 설명한 좋은자료가많다. 

```js

var a = 0.42;
var b = .42
// 소수점 앞 정수가 0이면 생략가능ㅋ

소수점 이하가 0일때도 생략가능

var c = 42.0;
var d = 42.;

var a = 5E10;
a; //500000000000
a.toExponentail() ; // "5e+10"

//숫자 값은 Number 객체 래퍼로 박싱할 수 있기 때문에 Number.prototype 메서드로 접근할 수 도있다.

var a  =42.59;

a.toPrecision(1); 
a.toPrecision(2); //43
a.toPrecision(3); // 42.5
```

숫자 리터럴에서 바로 접근할 수 있으므로 굳이 변수를 만들어 할당하지 않아도 된다. 하지만 소수점일 경우엔 프로퍼티 접근자가 아닌 리터럴의 일부로 해석되므로 .연산자를 사용할 때 주의하자.



```js

42.toFixed(3) // syntaxError  

(42).toFixed(3) // 올바른 구문
0.42.toFixed(3) // "0.420"
42..toFixed(3) // "42.000"
```
42.toFixed(3) 에서 구문 에러가 난 이유는 . 이 42.리터럴의 일부가 되어버려 .toFixed 메서드에 접근할 수 없기 때문이다. 

42..toFixed 의 경우 첫번째 .은 숫자 리터럴의 일부 두번째 점은 프로퍼티 연산자로 해석되므로 문제가없다. 하지만 보기에 어색하고 불편하므로 이런 코드는 잘 쓰지 않는다. 사실 원시값이 메서드를 직접 호출할 일은 거의 없다. 물론 드물다고해서 나쁘거나 틀렸다는 것은 아니다.

Number.prototype을 확장하여 숫자 값연산 기능을 추가한 라이브러리들도 있다. 

큰숫자는 보통 다음과같이 지수형으로 표시한다. 
```js

var onethousand = 1E3; // 1 * 10^3
var onemilliononehundredthousand = 1.1E6;
```



### 2.3.2 작은 소수 값 

다음은 널리 알려진 이진 부동 소수점 숫자의 부작용 문제이다. 

0.1 + 0.2 === 0.3 // false 노드에서 돌리니까 true뜨는데요?????뭐지


부동 소숫점 숫자를 조심히 다루어야 할 애플리케이션도 있겠지만 많은 애플리케이션이 전체수만을 그것도 기껏해야 백만 단위나 조 단위 규모의 숫자를 다룬다. 이런 상황이라면 언제나 안심하고 자바스크립트의 숫자 연산 기능을 믿고써도 된다.

가장 일반적으로는 미세한 반올림 오차를 허용 공차로 처리하는 방법이있다. 이렇게 미세한 오차를 머신 입실론 이라고하는데 자바스크립트 숫자의 머신 입실론은 2-52 승 이다.

ES6 부터는 이값이 Number.EPSILON으로 미리 정의되어있으므로 필요하면 사용하면된다.

부동 소숫점 숫자의 최댓값은 Number.MAX_VALUE 로 정의하고 최솟값은 Number.MIN_VALUE로 정의한다.

#### 2.3.3 안전한 정수 범위

숫자를 표현하는 방식이 어렵다보니 정수는 Numer.MAX_VALUE 보다 훨씬 작은 수준에서 안전 값의 범위가 정해졌다. 안전하게 표현할 수 있는 정수는 최대  2의 53승 -1 이다. 세자리 콤마를 찍어보면 얼추 9천조가 넘는다. 아주 끝내주게 여유로운 수치다.

이값은 ES6에서 Number.MAX_SAFE_INTEGER 로 정의한다. (9007199254740991)


자바스크립트 프로그램에서 이처럼 아주 큰 숫자에 맞닥뜨리는 경우는 데이터베이스등에서 64비트 id를 처리할 때가 대부분이다. 64비트 숫자는 숫자 타입으로 정확하게 표시할 수 없으므로 자바스크립트 string 타입으로 저장해야한다.
다행히 그렇게 큰 id 값을 숫자로 연산할 일은 흔치 않다. 하지만 아주 큰 수를 다룰 수 밖에 없는 상황이라면 , 지금으로써는 큰 수 유틸리티를 사용해야한다. 

### 2.3.4 정수인지 확인 
ES6부터는 Number.isInteger()로 어떤 값의 정수 여부를 확인한다.

```js
Number.isInteger(42) // true

Number.isInteger(42.000) true
Number.isInteger(42.3) // false

```


안전한 정수인지 여부는 ES6부터 Number.isSafeInteger() 로 체크한다.

```js
Number.isSafeInteger(Number.MAX_SAFE_INTEGER);
Number.isSafeInteger(Math.pow(2,53)) // false
Number.isSafeInteger(Math.pow(2,53) - 1) // true
```

폴리필은 다음과같다.

```js
if (!Number.isSafeInteger) {
    Number.isSafeInteger = function(num) {
        return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
    }
}
```

### 2.3.5 32비트 부호있는 정수

정수의 안전범위가 대략 9천조(53) 비트에 이르지만, 32비트 숫자에만 가능한 연산이 있으므로 실제 범위는 훨씬 줄어든다.  a | 0 과같이 쓰면 숫자값 -> 32비트 부호있는 정수로 강제 변환을 한다. 비트 연산자는 32비트 정수값에만 쓸 수 있기 때문에 가능한 방법이다. 0과의 or연산은 본질적으로 noop비트연산과 같다.

## 2.4 특수 값

### 2.4.1 값 아닌 값

undefined 타입의 값은 undefined 밖에 없다. null타입도 값은 null뿐이다. 그래서 이둘은 타입과 값이 항상 같다.

undefined 와  null의 의미를 어떻게 정의하여 쓰든지 null은 식별자가 아닌 특별한 키워드이고 null이라느 ㄴ변수에 뭔가 할당할 수는 없다. undefined 는 식별자로 쓸 수 있다.

### 2.4.2 Undefined
느슨한 모드에서는 전역 스코프에서 undefined 란 식별자에 값을 할당할 수 있다. 절대 추천하지 않는다.

void 연산자 undefined 는 내장 식별자로 값은 undefined 이지만 이 값은 void 연산자로도 얻을 수 있다.표현식 void 는 어떤 값이든 무효로 만들어 항상 결괏값을 undefined 로 만든다. 기존 값은 건드리지 않고 연산후 값은 복구할 수 없다.

```js
var a =42;
console.log(void a, a) // undefined 42
```

void 만으로 undefined 값을 나타내려면 void 0이라고 쓴다. 

void 연산자는 값이 존재하는 곳에서그 값이 undefined 가 되어야 좋을 경우에만 사용하자.

신기하다.. void a  해서 undefined 만드는게 신기해요우


### 2.4.3 특수문자 

숫자 타입에는 몇가지 특수한 값이 있다. The not number, number

수학 연산시 두 피연산자가 저부 숫자가 아닐 경우 유효한 숫자가 나올수 없으므로 그결과는 NaN이다. NaN 은 글자그대로 숫자 아님이다. 유효하지 않은 숫자, 실패한 숫자또는 몹쓸 숫자라고 하자.
```js
var a = 2 / 'foo' // NaN
typeof a === "number" // true
```

즉 숫자아님의 typeof 는 숫자다란 뜻이다. 이게 무슨 개소린가.

NaN은 경계 값의 일종으로 숫자 집합 내에서 특별한 종류의 에러상황을 나타낸다.

NaN은 너무 귀하신 몸이라 다른 어떤 NaN과도 동등하지 않다. 사실상 반사성이 없는 유일무이한 값이다. 따라서 NaN !== NaN이다. 좀이상하긴하다.
전역 유틸리티 isNaN() 함수가 NaN여부를 말해준다.

isNaN은 치명적인 결함이있다. 이 함수는 NaN의 의미를 너무 글자그대로만 해석해서 실제로 인자값이 숫자인지 여부를 평가하는 기븡이 전부다 하지만 이래서는 결과가 정확할 수 없다. NaN은 자기랑 동등하지 않다.

NaN은 세상의 모든 언어를 통틀어서 자기 자신과도 동등하지 않은 유일한 값이다. 

자바스크립트에서 무한대 / 무한대는 정의되지 않은 연산이며 결괏값은 NaN이다.




```js
var a = 0/ -3;

a; // -0

a.toString(); // "0"
a + "" ; // "0"

```

-0 을 문자열화하면 항상 "0" 이다.

신기하게도 반대로 하면 있는 그대로 보여준다.
```js
+"-0" // -0
Number("-0") // -0
JSON.parse("-0") // -0
```

도대체 -0을 왜 만든 것일까? 값의 크기로 어떤 정보와 그 값의 부호로 또다른 정보를 동시에 나타내야하는 애플리케이션이 있기 때문이다. 
잠재적인 정보 소실을 방지하기 위해 0의 부호를 보존한 셈이다.

### 2.4.4 특이한 동등 비교 

ES6 부터는 잡다한 예외를 걱정하지 않아도 두 값이 절대적으로 동등한지를 확인하는 새로운 유틸리티를 지원한다. 바로 Object.is() 이다.


## 2.5 값 vs 레퍼런스

다른 언어에서 값은 사용하는 구문에 따라 값-복사 또는 레퍼런스 복사의 형태로 할당/전달한다. 
c++ 에서는 어떤 함수에 전달할 숫자 인자 값을 그 함수내에서 수정하려면 int & myNum 형태로 함수 인자를 선언하고 호출하는 쪽에서는 변수 x를 넘기면 myNum은  x를 참조한다. 자바스크립트에는 값또는 레퍼런스의 할당 및 전달을 제어하는 구문 암시가 전혀없다. 대신 값의 타입만으로 값 복사 레퍼런스 복사 둘중 한쪽이 결정된다.

```js
var c = [1,2,3]
var d = c

d.push(4)
c // [1,2,3,4]
d // [1,2,3,4]
```

null undefined string number boolean 그리고 es6 의 symbol 같은 단순값은 언제나 값-복사 방식으로 할당/전달된다.

객체나 함수등 합성값은 할당 전달시 반드시 레퍼런스 사본을 생성한다. c와 d는 모두 합성값이자 동일한 공유값에 대한 개별 레퍼런스다. 여기서 기억해야할 점은 c와 d가 [1,2,3]을 소유하는 것이아니라 단지 이 값을 동등하게 참조만 한다는 사실이다. 따라서 레퍼런스로 실제 공유한 배열 값이 변경되면, 이 공유 값 한 군데에만 영향을 미치므로 두 레퍼런스는 갱신된 값 [1,2,3,4]를 동시에 바라보게된다.


배열같은 합성 값을 값-복사에 의해 효과적으로 전달하려면 손수 값의 사본을 만들어 전달한 레퍼런스가 원본을 가리키지 않게 하면 된다. 
예를 들어서 인자없이 slice()를 호출하면 전혀 새로운 배열 사본을 만든다. 이렇게 복사한 사본만을 가리키는 레퍼런스를 전달하니 foo() 는 a의 내용을 건드릴 수 없다.


반대로 스칼라 원시값을 레퍼런스처럼 바뀐 값이 바로바로 반영되도록 넘기려면 원시값을 다른 합성값으로 감싸야한다.

레퍼런스는 꽤 강력하지만 이따금 걸림돌이 되기도 하고 존재하지도 않는 레퍼런스를 찾아 정처없이 헤매기도한다. 값복사냐 레퍼런스 복사냐를 결정하는 유일한 단서는 값의 타입뿐이므로 사용할 값 타입을 잘 정해서 간접적으로 할당/전달 로직에 반영해야한다.

## 2.6 정리

js 배열은 모든 타입의 값들을 숫자로 인덱싱한 집합이다. 문자열은 일종의 유사배열이지만 나름 특성이 있기 때문에 배열로 다루고자 할 때에는 조심하는게 좋다. 자바스크립트 숫자는 정수와 부동 소수점 숫자 모두 포함한다.

null타입은 null 이란 값 하나뿐이고, undefined 타입도 값은 undefined 하나뿐이다. undefined 는 할당된 값이 없다면 모든 변수/프로퍼티의 디폴트 값이다. void 연산자는 어떤 값이라도 undefined 로 만들어 버린다.

단순 스칼라 원시값은 값 복사에 의해 ,  합성값은 레퍼런스 복사에의해 할당/전달된다. 자바스크립트에서의 레퍼런스는 다른 언어의 레퍼런스 포인터와는 전혀 다른 개념으로 또 다른 변수 / 레퍼런스가 아닌 오직 자신의 값만을 가리킨다.
