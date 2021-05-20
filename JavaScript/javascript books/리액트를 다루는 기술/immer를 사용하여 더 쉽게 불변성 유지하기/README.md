# immer

```js
import produce from 'immer'

const nextState = produce(originalState, draft => {
    draft.somewhere.deep.inside = 5;
})
```

produce라는 함수는 두가지 파라미터를 받는다. 첫번째는 수정하고 싶은 상태이고 두번째 파라미터는 상태를 어떻게 업데이트 할지 정의하는 함수이다.

두번째 파라미터로 전달되는 함수내부에서 원하는 값을 변경하면 produce함수가 불변성을 유지를 대신해주면서 새로운 상태를 생성해준다.

```js
import produce from 'immer';

const originalState = [
    {
        id:1,
        todo: '전개연산자와배열 내장함수로 불변성유지하기',
        checked: true,
    },
    {
        id:2,
        todo: 'immer로 불변성 유지하기',
        checked: false,
    }
]

const nextState = produce(originalState, draft => {
    const todo = draft.find(t => t.id === 2);
    todo.checked = true;

    draft.push({
        id: 3,
        todo: '일정관리앱에 immer적용하기',
        checked: false
    })

    draft.splice(draft.findIndex(t => t.id === 1), 1);
})

```

immer를 사용하면 배열에 직접적인 변화를 일으키는 push, splice 등의 함수를 사용해도 무방하다. 그렇기 때문에 불변성을 유지에 익숙하지 않아도 자바스크립트에 익숙하다면 컴포넌트 상태에 원하는 변화를 쉽게 반영 키실수 있다. 

immer에서 제공하는 produce함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환한다.

```js
const update = produce(draft => {
    draft.value= 2;
})
const originalState = {
    value: 1,
    foo: 'bar'
}
const nextState = update(originalState);
console.log(nextState) // {value :2, foo: 'bar'}
```