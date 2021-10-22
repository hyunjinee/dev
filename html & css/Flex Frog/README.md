# Flex Frog

## justify-content

이 속성은 다음의 값들을 인자로 받아 요소들을 가로선 상에서 정렬한다.

- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
- center: 요소들을 컨테이너의 가운데로 정렬합니다.
- space-between: 요소들 사이에 동일한 간격을 둡니다.
- space-around:요소들 주위에 동일한 간격을 둡니다.

## align-items

인자로 다음의 값들을 받아 세로선상에서 요소들을 정렬한다.

- flex-start: 요소들을 컨테이너의 꼭대기로 정렬한다.
- flex-end: 요소들을 컨테이너의 바닥으로 정렬한다.
- center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬한다.
- baseline: 요소들을 컨테이너의 시작위치에 정렬한다.
- stretch: 요소들을 컨테이너에 맞도록 늘린다.

## flex-direction

이 속성은 다음 값들을 인자로 받아 컨테이너안에서 요소들이 정렬해야 할 방향을 지정한다.

- row: 요소들을 텍스트의 방향과 동일하게 정렬한다.
- row-reverse: 요소들을 텍스트의 반대방향으로 정렬한다.
- column: 요소들을 위에서 아래로 정렬한다.
- column-reverse: 요소들을 아래에서 위로 정렬한다.

flex-direction 방향이 column일 경우 justify-content의 방향이세로로, align-items의 방향이 가로로 바뀐다.

## order

때로는 row나 column의 순서를 역으로 바꾸는 것만으로는 충분하지 않다. 이러한 경우에는 order속성을 각 요소에 적용할 수 있다. order의 기본값은 0이며, 양수나 음수로 바꿀 수 있다.

## flex-wrap

- nowrap: 모든 요소를 한줄에 정렬한다.
- wrap: 요소들을 여러 줄에 걸쳐 정렬한다.
- wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬한다.

## flex-flow

flex-direction과 flex-wrap이 자주 같이 사용되기 때문에, flex-flow가 이를 대신할 수 있다. 이 속성은 공백 문자를 이용하여 두 속성의 값들을 인자로 받는다.
예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 `flex-flow: row wrap`을 사용할 수 있다.

## algin-content

`align-content`를 사용하여 여러줄 사이의 간격을 지정할 수 있다. 이속성은 다음 값들을 인자로 받는다.

- flex-start: 여러줄들을 컨테이너의 꼭대기에 정렬한다.
- flex-end: 여러줄들을 컨테이너의 바닥에 정렬한다.
- center: 여러 줄들을 세로선 상의 가운데에 정렬한다.
- space-between: 여러줄들 사이에 동일한 간격을 둔다.
- space-around: 여러줄들 주위에 동일한 간격을 둡니다.
- stretch: 여러 줄들을 컨테이너에 맞도록 늘릅니다.

이 속성을 사용하는 방법이 어려울수 있다. align-content는 여러줄들 사이의 간격을 지정하며, align-items는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 검사한다. 한줄만 있는 경우, align-content는 효과를 보이지 않는다.

![캡처](https://user-images.githubusercontent.com/63354527/114256077-9ff98f80-99f2-11eb-8258-e957d5eea5cd.PNG)
