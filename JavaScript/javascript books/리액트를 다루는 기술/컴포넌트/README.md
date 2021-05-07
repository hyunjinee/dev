# 컴포넌트

컴포넌트를 선언하는 방식은 두가지이다. 하나는 함수형 컴포넌트, 하나는 클래스형 컴포넌트이다.
클래스형 컴포넌트와 함수형 컴포넌트의 차이점은 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있다는 것이다.

함수형 컴포넌트의 장점을 나열해보자.
우선 클래스형보다 선언하기 훨씬 편하다. 메모리 자원도 클래스형 컴포넌트보다 덜사용한다. 또한 프로젝트를 완성하여 빌드한 후 배포할 때도 함수형 컴포넌트를 사용하는 것이 결과물의 파일 크기가 더 작다. 사실상 성능과 파일 크기면에서는 거의 차이 없다.


> 일반 함수는 자신이 종속된 객체를 this 로 가리키며, 화살표함수는 자신이 종속된 인스턴스를 this 가 가르킨다.

## props

props는 properties를 줄인 말로 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소이다. props값은 해당 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있다. 


### 태그 사이의 내용을 보여주는 children
리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 props가 있는데 바로 children이다.

컴포넌트의 필수  props를 지정하거나 props 타입을 지정할 때는 propTypes를 사용한다.컴포넌트의 propTypes를 지정하는 방법은 defaultProp을 지정하는 설정과 비슷하다. 우선 propTypes를 사용하려면 코드 상단에 import 구문을 불러와사용한다. 

`PropTypes`에는 여러가지 종류를 설정할 수 있다.
- array: 배열
- arrayOf: 특정 PropType 으로 이루어진 배열을 의미한다. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열이다.
- bool: true, false
- func: 함수
- object
- string
- symbol
- node
- instanceOf(클래스): 특정 클래스의 인스턴스
- oneOf(['dog', 'cat']): 주어진 배열 요소 값중 하나
- oneOfType([React.PropTypes.string, PropTypes.number])
- objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- shape({name: PropTypes.string, num: PropTypes.number})
- any: 아무 종류

클래스형 컴포넌트에서  props를 사용할 때는 render 함수에서 this.props를 조회하면 된다. 그리고 defaultProps와 propTypes는 똑같은 방식으로 설정할 수 있다. 

```js
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, favoriteNumber, children} = this.props;
        return (...);
    }
}

export default MyComponent;
```

리액트에서 state는 컴포넌트 내부에서 바뀔수 있는 값을 의미한다. props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.


this.setState 에서 주의해야 할 점이 있다. 이자식은 비동기로 상태를 바꾸기 때문에 state값이 바로 바뀌지는 않는다. 클래스형 컴포넌트에서 state의 초깃값은 객체형태를 넣어주어야 한다. useState에서는 반드시 객체가 아니어도 상관없다.
값의 형태는 자유이다. 숫자일수도, 문자열일수도, 객체일수도 ,배열일수도있다.
함수를 호출하면 배열이 반환되는데, 배열의 첫번째 원소는 현재상태이고, 두번째 요소는 상태를 바꾸어주는 함수이다. 이 함수를 세터함수라고 한다. 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해줄 수 있다. 클래스형 컴포넌트든 함수형 컴포넌트든 state를 사용할 때는 주의해야할 사항이 있다. state값을 바꾸어야 할 때는 setState혹은 useState를 통해 전달받은 세터함수를 사용해야한다.

props와 state는컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있지만, 그 역할은 매우 다르다. props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있다.
props를 사용한다고 해서 값이 무조건 고정적이지 않다. 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있다. 