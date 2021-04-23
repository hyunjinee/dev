# 정리

## box-shadow 속성에 대하여..

box shadow 속성은 요소의 테두리를 감싼 그림자 효과를 추가한다. 쉼표로 구문해서 여러그림자 효과를 입힐 수 있다. 박스 그림자는 요소에서 수평수직 거리, 흐릿함과 확산 정도, 생상으로 이루어진다.

`box-shadow: 10px 5px 5px red;`
`box-shadow: 60px -16px teal;`
`box-shadow: 12px 12px 2px 1px rgba(0,0,255, .2);`
`box-shadow: inset 5em 1em gold;`
`box-shadow: 3px 3px red, -1em 0 .4em olive;`

box-shadow 속성은 거의 모든 요소의 테두리에서 그림자를 드리울 수 있도록 도와줍니다. border-radius 가 요소에 함께 적용됐다면 박스 그림자의 모서리도 똑같이 둥근 모서리를 갖게된다. 여러 그림자의 z축 순서는 text-shadow 와 동일하게 처음 그림자일수록 위로 올라옵니다.


> 여기서 중요한 부분은 첫 그림자일 수록 위에있는 다는 사실이다. 꼭 기억하자!!!!

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```


box-shadow 는 다음 구성요소로 지정할 수 있다.
- 두개에서 네개의 length 값
- 두개의 값을 사용하면 offset-x, offset-y 로 분석하낟.
- 세개의 값을 사용하면 blur-radius로 분석하다.
- 네번째 값이 주어지면 spread-radius로 분석한다.
- 선택사항으로 inset 키워드
- 선택사항으로 color 값


> inset

값을 지정하지 않으면 기본값 요소가 공중에 떠있는 것처럼 밖에 드리우는 그림자가 된다. inset키워드가 존재하면 요소가 움푹 들어간 것 처럼 그림자가 요소의 테두리 안, 배경색 위, 내부 콘텐츠 밑에 그려진다.

