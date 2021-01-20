# 생활코딩 Redux 수업

![캡처](https://user-images.githubusercontent.com/63354527/105112960-555d2b00-5b07-11eb-8110-b8c63d5a744b.PNG)

리덕스의 핵심은 store 이다. 은행이라고 비유적으로 생각해보자.
store 라고하는곳은 정보가 저장되는 곳이다.
state 라는 정보가 store 에 저장된다. redux 에서는 state에 직접 접근하는 것이 불가능하다.
store을 만들때 reducer 라는 함수를 만들어서 공급해야한다.

```javascript
fucntion reducer(oldState, action){
    //...
}
var store = Redux.createStore(reducer);
```

render 는 getState 로 state 값을 참조해서 UI를 만드는 요소이다.

```javascript
function render() {
    var state = store.getState();
    document.querySelector('#app').innerHTML = '<h1>WEB</h1>
}
```

state 값이 바뀔때마다 알아서 render 가 호출되면 알아서 UI가 갱신 될 것이다.
이때 사용하는 것이 subscribe (구독) 이다.

```javascript
store.subscribe(render);
```

store을 구독하면, state 값이 바뀔때마다 렌더함수를 호출 할 수 있게된다.
