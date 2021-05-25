# contextapi


파라미터에는 해당 Context의 기본 상태를 저장한다.



fucntion as a child패턴, 혹은 render props 

> render props 예제
```js

const RenderPropsSample = ( { children} ) => {
    return <div> 결과: {children(5)} </div>
}

export default RenderPropsSample;

<RenderPropsSample>{value => 2* value} </RenderPropsSample>

```

createContext 함수를 사용할때는 파라미터로 기본값을 넣어주어야한다. 이 기본값은 Provider를 사용하지 않을 때만 사용한다.
만약 provider는 사용했는데 value 를 명시하지 않았다면, 이 기본값을 사용하지 않기 때문에 오류가 발생한다.
Provider를 사용할 때는 value값을 명시해주어야 제대로 작동한다는 것을 명심해야한다.
기본값을 설정해놓으면 실수로provider를 쓰지 않았을 때 리액트 애플리케이션에서 에러가 발생하지 않는다.



static contextType = Context

이런식으로는 클래스형 컴포넌트에서 컨텍스트를 쓸 수 있다.참조할때는 this.context. 어쩌구

그리구 한클래스에서 하나의 context밖에 못쓴다.