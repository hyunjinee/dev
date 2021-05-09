# 라이프 사이클

모든 리액트 컴포넌트에는  라이프사이클이 존재한다. 컴포넌트의 수명은 페이지에 렌더링되기 전인 준비과정에서 시작하여 페이지에서 사라질 때 끝난다.
리액트 프로젝트를 진행하다보면 컴포넌트를 처음으로 렌더링할 때 어떤 작업을 처리해야하거나 컴포넌트를 업데이트하기 전후로 어떤 작업을 처리해야할 수도있고, 불필요한 업데이트를 방지해야 할 수도 있다.

이때는 컴포넌트의 라이프 사이클 메서드를 사용한다. 참고로 라이프 사이클 메서드는 클래스형 컴포넌트에서만 사용할 수 있다. 함수형 컴포넌트에서는 사용할수 없는데, 그대신에 Hooks기능을 사용하여 비슷한 작업을 처리할 수 있다. 

## 마운트
DOM이 생성되고 웹브라우저상에 나타나는 것을 마운트라고 합니다. 이때 호출하는 메서드는 다음과 같다.

컴포넌트 만들기 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount

생성자: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드이다. 

getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드이다.

render: 우리가 준비한 UI를 렌더링하는 메서드이다.

componetDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드이다.

## 업데이트

컴포넌트는 다음과 같은 총 네가지 경우에 업데이트한다.

1. props가 바뀔때
2. state가 바뀔때
3. 부모 컴포넌트가 렌더링될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때

업데이트를 발생시키는 요인들로부터 -> getDerivedStateFromProps -> shouldComponentUpdate -> true 반환시 render 호출 ,false 반환시 여기서 작업 취소 -> render -> getSnapshotBeforeUpdate ->웹브라우저상 실제 DOM변화 -> componentDidUpdate


컴포넌트는 다양한 이유로 업데이트 될수 있다. 첫째 부모 컴포넌트에서 넘겨주는  props가 바뀔 때입니다. 컴포넌트에 전달하는 props값이 바뀌면 컴포넌트 렌더링이 이루어진다. 둘째, 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트 될때, 셋째 부모컴포넌트가 리렌더링 될 때, 자신에게 할당된 props가 바뀌지 않아도 또는 자신이 들고 있는 state가 바뀌지 않아도 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링 된다.

- getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출된다. props의 변화에 따라 state값에도 변화를 주고 싶을 때 사용한다.
- shouldComponentUpdate: 컴포넌트가 리렌더링을 해야할지 말아야할지 결정하는 메서드인다. 만약 특정함수에서  this.forceUpdate() 함수를 호출하면 이 과정을 생략하고 바로  render 함수를 호출한다.
- render: 컴포넌트를 리렌더링합니다.
- getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드이다. 
- componentDidUpdate:컴포넌트의 업데이트 작업이 끝난후 호출하는 메서드이다.


## 언마운트

마운트의 반대과정, 즉 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 한다. 

- componentWillUnmount: 컴포넌트가 웹브라우저상에서 사라지기 전에 호출하는 메서드이다.





# 라이프 사이클 메서드

### render

이 메서드는 컴포넌트 모양새를 정의한다. 라이프 사이클 메서드중 유일한 필수 메서드이다. 아무것도 보여주고 싶지 않다면, null값이나 false값을 반환하도록 한다.
다음사항에 주의한다. 이메서드 안에서는 이벤트 설정이 아닌곳에서 setState를 사용하면 안되며, 브라우저의 DOM에 접근해서도 안된다. DOM정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야한다.

### constructor

이 메서드는 컴포넌트 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행된다. 이 메서드에서 초기 state를 정할 수 있다.

### componentDidMount 메서드

이것은 컴포넌트를 만들고 첫 렌더링을 마치고 실행한다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청같은 비동기 작업을 처리한다.

### shouldComponentUpdate

`shouldComponentUpdate(nextProps, nextState)` 이것은 props또는 state를 변경했을 때 리렌더링을 시작할지 여부를 지정하는 메서드이다. 반드시 true또는 false를 반환한다. 컴포넌트를 만들때 이메서드를 따로 생성하지 않으면 언제나 true를 반환한다. 이 메서드가 false값을 반환한다면 업데이트 과정은 여기서 중지된다.

이 메서드 안에서 현재 props와 state는 this.props와 this.state로 접근하고, 새로 설저오딜 porps또는 state는 nextProps, nextState로 접근할 수 있다.
프로젝트 성능을 최적화 할때 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할 때는 fasle값을 반환하게 한다. 

### getSnapshotBeforeUpdate

이 메서드는 render에서 만들어진 결과물이 브라우저에 실제로 반영되기직전에 호출된다. 이 메서드에서 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot값으로 전달받을 수 있다. 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용된다.

### componentDidUpdate
`componentDidUpdate(prevProps, prevState, snapshot)` 이것은 렌더링을 완료한후 실행된다. prevProps, prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다. getSanpshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있다.

### componentWillUnmount
이것은 컴포넌트를 돔에서 제거할 때 발생한다. compoentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면, 여기서 제거 작업을 한다.

### componentDidCatch
이 메서드는 컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지않고 오류 UI를 보여줄 수 있게 해준다. 사용 방법은 다음과 같다.

```js
componentDidCatch(error, info) {
    this.setState({
        error: true
    });
    console.log({error, info});
}
```
여기서 에러 파라미터에 어떤에러가 발생했는지 알려주며, info파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 준다. 앞의 코드에서는 그저 콘솔로그만 했지만 나중에 실제로 사용할 때 오류가 발생하면 서버 API를 호출하여 따로 수집할 수 있다.

그러나 이메서드를 사용할 때는 컴포넌트 자신에게 발생하는 에러를 잡아낼 수 없고 자신의 this.props.children 으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼수 있다는 점을 알아두어야한다. 