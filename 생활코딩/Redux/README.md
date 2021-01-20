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
![캡처2](https://user-images.githubusercontent.com/63354527/105116449-24342900-5b0e-11eb-9375-7249b806a1a6.png)

위의 submit 에는 다음과같은 이벤트리스너가 걸려있다.

```javascript
<form onsubmit="
store.dispatch({type:'create', payload:{title:title, desc:desc}})">
```

action 이 dispatch 에 전달, dispatch 가 reducer 호출할 때 현재의 state 와 action (dispatch 를 통해서 보낸 데이터)

```javascript
function reducer(state, action) {
  if (action.type === "create") {
    var newContents = oldState.contents.concat();
    var newMaxId = oldState.maxId + 1;
    newContents.push({ id: newMaxId });
    return Object.assign({}, state, {
      contents: newContents,
      maxId: newMaxId,
      mode: "read",
      selectedId: newMaxID,
    });
  }
}
```

reducer 는 state 를 입력값으로 받고, action 을 참조해서 새로운 state 값을 만들어내서 return 해주는 state를 가공하는 가공자이다.
![캡처3](https://user-images.githubusercontent.com/63354527/105117574-0ff12b80-5b10-11eb-9e71-8a55bf7e9e98.PNG)

### Redux 가 가져온 혁명적인 변화는 뭘까??

여러가지 부품들이 있고 그 부품들끼리 서로를 조작하는 코드들이 얽혀있다고 생각해보자. 코드를 작성할 때, 그 부품하나에대해서만 생각해야하는게 아니라 다른 부품까지 생각하면서 작성해야한다.
만약 가운데 store 가 있다면 하나의 부품이 바뀌었을 때 그 부품이 store 에 가서 내가 바뀌었다고 말한다. 그러면 store 는 그 부품이 바뀌었다고 모든 다른 부품들에게 통보한다. 그럼 각각의 부품은 store의 상태에 따라 자신이 어떻게 달라져야하는지에대한 코드를 동작한다.
store은 자기를 구독하고 있는 부품들에게 update 하라고 알려준다. 각각의 부품들은 각자 알아서 update 한다. 이렇게하면, 서로 얽히는 일을 줄일 수 있다.
