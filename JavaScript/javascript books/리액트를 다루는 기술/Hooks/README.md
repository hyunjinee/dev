# Hooks

## useState
useState는 가장 기본적인 훅이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다. 


## useEffect

리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅이다. 클래스형 컴포넌트의 componentDidMount componentDidUpdate 를 합친 형태로 보아도 무방하다.

useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라진다.
컴포넌트가 업데이트되기 직전이나 언마운트되기 직전에 어떤 작업을 수행하고 싶다면 뒷정리 함수를 반환해 주어야한다.

렌더링 될 때마다 뒷정리 함수가 계속 나타난다. 그리고 튓정리 함수가 호출될 떄는 업데이트되기 직전의 값을 보여준다.
오직 언마운트 될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두번쨰 파라미터에 비어있는 배열을 넣는다.

## useReducer

useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook이다.
리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션을 전달받아 새로운 상태를 반환하는 함수이다.
리듀서의 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜주어야한다.

```js
function reducer(state, action) {
    return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환한다.
}
```
useReducer에서 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가 없다. 심지어 객체가 아니라 문자열이나 숫자여도 상관없다.

useReducer에 첫번쨰 파라미터에는 리듀서 함수를 넣고 두번째 파라미터에는 해당 리듀서의 기본값을 넣는다. 이 훅을 사용하면 state값과 dispatch함수를 받아오는데, 여기서 state는 현재상태를 가리키고 있는 상태고, dispatch는 액션을 발생시키는 함수이다. dispatch(action)과 같은 형태로 함수안에 파라미터로 액션을 넣어주면 리듀서 함수가 호출되는 구조이다.

useReducer 을 사용했을 때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺴낼 수 있다는 것이다.

## useMemo

useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할수 있다. 

## useCallback

렌더링 성능 최적화. 첫번째 파라미터에는 생성하고 싶은 함수 두번째 파라미터에는 배열을 넣는다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야하는지 명시해야한다. 빈배열을 넣으면 렌더링 될 때 만들었던 함수를 계쏙해서 재사용하게되며 넣게되면 그값이 바뀌거나 새로운내용이 추가될때 새로 만들어진 함수 사용

## useRef

ref를 쉽게 사용할 수 있도록 도와줌. useRef를 사용해서 만든 객체안의 current 값이 실제 엘리먼트를 가리킨다.

로컬 변수 사용하기
컴포넌트 로컬 변수를 사용해야할 때도 useRef를 활용할 수 있다. 여기서 로컬변수란 렌더링과 상관없이 바뀔수 있는 값을  의미한다. 클래스 형태로 작성된 컴포넌트의 경우에는 로컬별수를 사용해야할 때 다음과같이 작성할 수 있다.
```js
import React, {Component} from 'react';
class MyComponent extends Component{
    id =1;
    setId = (n) => {
        this.id = n;
    }
    printId = () => {
        console.log(this.id);
    }
    render() {
        return (
            <div>
                MyComponent
            </div>
        )
    }
}

export default MyComponent;
```
이 코드를 함수형 컴포넌트로 바꾸면,
```js
import React, {useRef} from 'react';

const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }

    const printId = () => {
        console.log(id.current);
    }

    return (
        <div>
            refsample
        </div>
    )
}

export default RefSample
```

이렇게 ref안의 값이 바뀌어도 컴포넌트가 렌더링 되지 않는다는 점에는 주의해야한다. 렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성한다.


## 다른 개발자가 만든 훅

https://nikgraf.github.io/react-hooks/

https://github.com/rehokks/awesome-react-hooks