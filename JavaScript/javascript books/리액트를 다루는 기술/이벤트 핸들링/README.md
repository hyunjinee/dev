# Event handling

1. 이벤트 이름은 카멜 표기법으로 작성한다.
예를 들어 html 으 onclick 은 onClick으로 작성한다.
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이아니라, 함수 형태의 값을 전달한다.
html에서 이벤트를 설정할 때는 큰따옴표안에 실행할 코드를 넣었지만, 리액트에서는 함수형태의 객체를 전달한다.
3. DOM요소에만 이벤트를 설정할 수 있다.
우리가 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다. 예를 들어 MyComponent에 onClick을 props로 전달하면 그냥 이름이 onClick인 props를 MyComponent에 전달해줄 뿐이다. 따라서 컴포넌트에 자체적으로 이벤트를 설정할 수는 없다. 하지만 전달받은 props를 컴포넌트 내부의 DOM이벤트로 설정할 수는 있다.


함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버립니다. 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업이 필요하다. 만약 바인딩하지 않는 경우라면 this가 undefined를 가르키게 된다.
```js
this.handleChange = this.handleChange.bind(this);
```
메서드 바인딩은 생성자 메서드에 하는 것이 정석이다. 하지만 이 작업을 불편하다고 느낄 수 있다. 새 메서드를 만들때마다 constructor 도 수정해야하기 때문이다. 이 작업을 더 간단하게 하는 방법이있다. 바로 바벨의 transform-class-properties 문법을 사용하여 화살표 함수 형태로 메서드를 정의하는 것이다. 
이 문법을 사용하면 인스턴스를 this로 함수가 바인딩된다.

### input 여러개 다루기

input여러개 다룰 때 어떻게 해야할까. 이벤트 객체를 활용하면 된다. `e.target.name` 값을 사용하면 되는데 onChange이벤트 핸들러에서 `e.target.name`은 해당 인풋의 name을 가리킨다. 이 값을 사용하여 state를 설정하면 쉽게 해결할 수 있다.


```js
handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
}
```
객체 안에서 key를 [] 로 감싸면 그안에 넣은 레퍼런스가 가리키는 값이 실제 key값으로 사용된다. 
예를 들어보자.
```js
const name = 'variantKey';
const object = {
    [name]: 'value'
}
```
결과는 {'variantKey': 'value'} 이다.

```js
handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.handleClick();
    }
}
```

e.target.name 을 쓰면 위와같이 useState를 쓸 때 인풋 값들이 들어있는 form 객체를 사용해 주면 된다.