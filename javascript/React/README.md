# React

## 리액트는 어쩌다 만들어졌을까?

사용자와 인터랙션이 자주 발생하고, 이에따라 동적으로 UI를 표현해야한다면, 규칙이 다양해지고, 관리하기도 어려워진다. 웹어플리케이션의 규모가 커질수록 DOM을 직접 건드리면서 작업을 하면 코드가 난잡해지기 쉽다. 처리해야 할 이벤트도 다양해지고, 관리해야할 상태값도 다양해지고, DOM도 다양해지면 이에따라 업데이트를 하는 규칙도 많이 복잡해지기 때문에 아래와 같은 상황이 일어난다.
![상황](https://i.imgur.com/mJftTBq.png)
그래서 Ember, Backbone, AngularJS등의 프레임워크가 만들어졌는데, 이 프레임워크들은 작동방식이 각각 다르지만, 쉽게 설명하자면 자바스크립트의 특정 값이 바뀌면 특정 DOM 속성이 바뀌도록 연결을 해주어서 업데이트를 하는 작업을 간소화 해주는 방식으로 웹개발의 어려움을 해결해 주었다.
하지만 리액트의 경우에는 조금 다른 발상에서 만들어졌다. 리액트는 어떠한 상태가 바뀌었을 때, 그 상태에 따라 DOM을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라, 아예 다 날려버리고 처음부터 모든걸 새로 만들어서 보여준다면 어떨까? 라는 아이디어에서 개발이 시작되었다.
이렇게 하면 "업데이트를 어떻게 해야할지" 에 대한 고민을 안해도 되기 때문에 개발이 쉬워진다. 하지만, 정말로 동적인 UI를 보여주기 위해서 모든걸 다 날려버리고 모든걸 새로 만들게 되면, 속도가 굉장히 느리다. 작은 웹 애플리케이션이라면 상관없겠지만, 규모가 큰 웹애플리케이션이라면 상상도 할 수 없다. 하지만 React 에서는 Virtual Dom 을 사용해 이를 가능하게 했다.
![virtualDOM](https://i.imgur.com/u6YnxUS.png)
Virtual Dom 은 가상의 Dom 이다.브라우저에 실제로 보여지는 DOM이 아니라 그냥 메모리에 가상으로 존재하는 DOM으로써 그냥 JAVASCRIPT 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM 을 보여주는 것보다 훨씬 빠르다. 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI를 Virtual DOM을 통해서 렌더링한다. 그리고 나서 리액트 개발팀이 만든 매우 효율적인 비교 알고리즘을 통해서 실제 브라우저에 보여지고 있는 DOM 과 비교후 차이가 있는 곳을 감지하여 이를 실제 DOM에 패치시켜준다. 이를 통해서 업데이트를 어떻게 할 지에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 되었다.

## 함수형 컴포넌트

## JSX 의 기본 규칙

JSX 는 리액트에서 생김새를 정의할 때 사용하는 문법이다. 얼핏보면 HTML같이 생겼지만, 실제로는 Javascript 이다.
리액트 컴포넌트파일에서 XML형태로 코드를 작성하면, babel 이 JSX 를 Javascript 형태로 변환을 한다.
![jsx](https://i.imgur.com/xRLnJNy.png)
Babel 은 자바스크립트 문법을 확장해주는 도구이다. 아직 지원하지 않는 최신 문법이나, 편의상 사용하거나 실험적인 자바스크립트 문법들을 정식 자바스크립트 형태로 변환해줌으로서 구형 브라우저 같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 한다.

### 꼭 닫혀야 하는 태그

JSX에서 태그는 꼭 닫혀야 한다.
HTML 에서는 input 또는 br 태그를 사용 할 때 닫지 않고 사용하기도 합니다. 하지만 리액트에서는 그렇게 하면 안됩니다.
태그와 태그 사이에 내용이 들어가지 않을 때에는, Self Closing 태그 라는 것을 사용해야 한다. 열리고 바로 닫히는 태그이다.

### 꼭 감싸져야하는 태그

두개 이상의 태그는 무조건 하나의 태그로 감싸져야 한다.

```javascript
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello />
    <div>안녕히계세요.</div>
  );
}

export default App;
```

이 코드는 다음과 같은 에러가 발생한다.
![에러](https://i.imgur.com/9kJaJ6i.png)
대신 하나의 태그로 감싸주면 문제가 해결된다.

```javascript
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
      <div>안녕히계세요</div>
    </div>
  );
}

export default App;
```

하지만 이렇게 감싸기 위해 불필요한 div로 감싸는게 별로 좋지 않은 상황도 있다. 그럴때에는 리액트의 Fragment 라는 것을 사용한다.

```javascript
import React from "react";
import Hello from "./Hello";

function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
```

태그를 작성할 때 이름 없이 작성을 하게 되면 Fragment가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않는다.
![fragment](https://i.imgur.com/AbJ74S3.png)

## JSX 안에 자바스크립트 값 사용하기

JSX 내부에 자바스크립트 변수를 보여줘야 할때는 {} 로 감싼다.

```javascript
import React from "react";
import Hello from "./Hello";

function App() {
  const name = "react";
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}

export default App;
```

## style 과 className

JSX 에서 태그에 style과 CSS class 를 설정하는 방법은 HTML과 다르다.
우선, 인라인 스타일은 객체 형태로 작성을 해야 하며, background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor 처럼 camelCase 형태로 네이밍 해주어야 합니다.

```javascript
//App.js
import React from "react";
import Hello from "./Hello";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
```

## props 를 통해 컴포넌트에 값 전달하기

props 는 properties 의 줄임말이다. 우리가 어떠한 값을 컴포넌트에 전달 해 주어야 할때, pros 를 사용한다.
App 컴포넌트에서 Hello 컴포넌트를 사용할 때 name 이라는 값을 전달해주고 싶다고 가정하자.

```javascript
import React from "react";
import Hello from "./Hello";

function App() {
  return <Hello name="react" />;
}

export default App;
```

이제 Hello 컴포넌트에서 name을 사용하려면,

```javascript
import React from "react";

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>;
}

export default Hello;
```

컴포넌트에 전달되는 props는 파라미터를 통하여 조회 할 수 있다. props는 객체 형태로 전달되며, 만약 name 값을 조회하고 싶다면, props.name을 조회한다.
함수의 파라미터에서 비구조화 할당(구조분해) 문법을 사용하면 조금더 간결하다.

```javascript
import React from "react";
import Hello from "./Hello";

function App() {
  return <Hello name="react" color="red" />;
}

export default App;
```

```javascript
import React from "react";

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

export default Hello;
```

style안에 중괄호가 두번들어가는 것은 가장 위에는 jsx문법, 그안에는 객체 리터럴이다.

```javascript
const textStyle = {
   fontSize:'10px',
   fontWeight:'bold',
}
<div style={textStyle}></div>
```

### defaultProps 기본값 설정

컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 defaultProps 라는 값을 설정한다.

```javascript
import React from "react";

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
```

## 조건부 렌더링

조건부 렌더링이란 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미한다.
에를 들어서, App 컴포넌트에서 Hello 컴포넌트를 사용할 때, isSpecial 이라는 props를 설정해보자.

```javascript
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```

여기서 true 는 자바스크립트이므로 괄호로 감싼다.

```javascript
import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
```

JSX에서는 null,false,undefined를 렌더링하게 된다면 아무것도 나타나지 않게 된다.

### props 값 설정을 생략하면 ={true}

컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주한다.
예를 들자면,

```javascript
import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
```

isSpecial 이름만 넣어주면, isSpecial ={true} 와 같은 의미이다.
