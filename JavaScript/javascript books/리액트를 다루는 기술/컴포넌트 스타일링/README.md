# component styling

node-sass 는 Sass를 CSS로 변환해준다.

```js
import React from 'react';
import styled, {css} from 'styled-components';

const sizes= {
    desktop: 1024,
    tablet: 768
}

const media = Object.keys(sizes).reduce((acc, label) =>
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }


    `
    return acc;
, {})
```
