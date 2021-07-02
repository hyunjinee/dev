# 네이티브

- String()
- Number()
- Boolean()
- Array()
- Object()
- Function()
- RegExp()
- Date()
- Error()
- Symbol()

네이티브는 내장함수이다. 


```js

var s = new String("heelo hyunjin")
```

네이티브는 생성자 처럼 사용할 수 있지만 실제로 생성되는 결과물은 예상과 다를 수 있다. 

```js
var a = new String("abc");
typeof a; "object"
a instanceof String; // true
Object.prototype.toString.call(a) "[object String]"
```

위에서 생성자의 결과는 원시값 "abc"를 감싼 객체 래퍼이다.

문자열 래퍼를 생성하고  원시값 abc는 아니다.

## 3.1 내부 [[Class]]

```js
Object.prototype.toString.call(null);
// "[object Null]"
Object.prototype.toString.call(undefined);
"[object Undefined]"

```

## 3.2 래퍼 박싱하기
객체 래퍼는 아주 중요한 용도로 쓰인다. 원시 값엔 프로퍼티나 메서드가 없으므로 .length, toString() 으로 접근하려면 원시 값으 ㄹ객체 래퍼로 감싸줘야한다. 고맙게도 자바스크립트는 원시값을 알아서 박싱하므로 다음과 같은 코드가 가능하다. 따라서 루프조건 i < a.length 처럼 빈번하게 문자열 값의 프로퍼티 메서드를 ㅏㅅ용해야한다면 자바스크립트 엔진이 암시적으로 객체를 생성할 필요가 없도록 처음부터 값을 객체로 갖고있는 것이 이치에 맞는 것처럼 보인다. 하지만 좋은 생각이 아니다. 오래전부터 브라우저는 이런 흔한 경우를 스스로 최적화하기 때문이다. 즉, 개발자가 직접 객체 형태로 선 최적화하면 프로그램이 더 느려질 수 있다. 직접 객체형태로 써야할 이유는 거의 없다.필요시 엔진이 알아서 암시적으로 박싱하게 하는 것이 낫다. 즉 new String("abc"), 처럼 코딩하지말고 그냥 알기 쉽게 원시값으로 사용하자.

### 3.2.1 객체 래퍼의 함정

```js

var a = new Boolean(false);

if (!a) {
    console.log('실해앙ㄴ됌')
}
```

false 를 객체 래퍼로 감쌌지만 문제는 객체가 truthy 한 값이라는 점이다.그래서 예상과는 달리 안에 들어있는 false 값과 반대의 결과다. 수동으로 원시 값을 박싱하려면 Object()함수를 이용한다. 


## 3.3 언박싱
객체 래퍼의 원시값은 valueOf() 메서드로 추출한다. 

```js

var a = new String("abc")
var b=  new Number(42)
var c = new Boolean(true)

a.valueOf()
b.valueOf()
c.valueOf() // true
```

## 3.4 네이티브, 나는 생성자다ㅏ.

배열, 객체 , 함수 ,정규식 같은 리터럴 형태로 생성하는 것이 일반적이지만, 리터럴은 생성자 형식으로 만든 것과 동일한 종류의 객체를 생성한다. 즉 래핑되지 않은 값은 없다. 

Array(1,2,3) 와 new Array(1,2 ,3)은 같다.

Array 생성자에는 특별한 형식이 하나 있는데 인자로 숫자하나만 받으면 그 숫자를 원소로하는 배열을 생성하는게 아니라 배열의 크기를 미리 정하는 기능이다. presize



```js
var a = new Array(3)
var  b= [undefined, undefined , undefined]

a.join("-")
b.join("-") 
a.map(function(v,i){ return i })
b.map(function(v,i) {
    return i
})
```

a.map()은 a에 슬록이 없기 때문에 map()함수가 순회할 원소가 없다. join은 다르다. join의 구현 로직을 살펴보자


```js

funciton fakeJoin(arr,connector) {
    var str = ""
    for (var i = 0; i < arr.length; i++) {
        if (i> 0) {
            str += connector;
        
        }
        if (arr[i] !== undefined) {
            str += arr[i]
        }
    }

    return str;
}

join은 슬롯이 있다는 가저앟에 length 만큼 루프를 반복한다. map()함수는 내부 로직이야 어떻든 이런 가정을 하지 않는 까닭에 이상한 빈 슬롯 배열이 입력되면 예기치 않은 결과가 빚어지거나 실패의 원인이 된다. 

Array.apply()

Array를 호출하는 동시에 {length: 3} 객체 값을 펼쳐서 인자로 넣는다.

apply내부에서는 아마 0에서 length 직전까지 루프를 순회할 것이다. 


### 3.4.2 Object(), Function(), and RegExp()

new Object() 같은 생성자 폼은 사실상 사용할 일이 없다. 리터럴 형태로 한번에 여러 프로퍼티를 지정할 수도 있는데 굳이 한번에 하나씩 일일이 프로퍼티르 ㄹ지정하는 방법으로 돌아갈 필요가 있을까?

Function 생성자는 함수의 인자나 내용을 동적으로 정의해야하는 매우 드문 경우에 한해 유용하다. Function()을 eval()의 대용품이라고 착각하지 말자. 이렇게 함수를 동적으로 정의하는 경우는 거의없을 것이다. 정규표현식은 리터럴 형식(/^a*b+/g)으로 정의할 것을 적극 권장한다. 구문이 쉽고 무엇보다 성능상 이점이있다.  자바스크립트 엔진이 정규 표현식을 미리 컴파일한 후 캐시한다. 

