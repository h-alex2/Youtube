# Note


## webpack css loader 설정하기
1. style-loader, css-loader 설치하기
```js
  module: {
    rules:
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  },

```
> 참고
> [css-loader (webpack 공식문서)](https://webpack.js.org/loaders/css-loader/)

## 스니펫 플러그인 단축키
- rfce

## Material UI 사용..

[Installation (공식문서)](https://mui.com/material-ui/getting-started/installation/)

### 문제점
- webpack을 설정해서 사용하는 중인데 @mui/icons-material 만 깔면 빌드 시간이 너~~~~~무 오래걸린다. 5분정도 걸림. 공식문서에는 Tree Shaking을 사용하라고 나와있는데 할 수 있겠지..?

## 이미지 crop
- object-fit 사용
- object-fit: contain;

## babel
바벨에 exclude 하듯이 include 할 수도 있음

## Styled-components 자식 컴포넌트에  커스텀 css  props로 전달하기
<https://devbirdfeet.tistory.com/177>

- 스타일 컴포넌트로 같은 컴포넌트에 온클릭했을 때 배경색이 변하게 햇지만 먹히질 않았음.
```js
const RowContainer = styled.div`
  :hover {
  background-color: #f2f2f2;
  cursor: pointer;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 16px;
  transition: all 2s;

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: rgba(210, 210, 210);
    `
  }

  .title {
    margin: 0;
```
- hover시에 이미 배경이 설정되어있었고 클릭했을 때 배경을 변경해야했는데 중복이 돼서 그런지 되지 않았음. 그래서 div로 한번더 감싸줌

- transition을 넣으면.. prop으로 받아서 적용하는 css가 적용이 안됨 왜지? 왜지! 
- 클릭하자마자 색이 변하게 할 수 없나?


## CSS, flex
- !important 속성값 강제 우선적용

- flex: 0.2; 20%만큼만 차지 0 ~ 1값  
<img src="./assets/readme_assets/220705-01.png" />


- 상단에 바로 뜨는 걸 모달이라고 하는구나
- 트리 쉐이킹


## import * as React from 'react'

## 에러 import * as React from 'react'
- Cannot read properties of null (reading 'useContext') 이 에러가 자꾸 난다..
- mui 에러가 자꾸 나서 font-awesome으로 바꿔버림.

<에러 이유>
- import * as React from 'react' 이렇게 해주질 않아서 그랬다.
- export default 없는 애들이나 module.exports로 된 애들은 * as로 해야 합니다. * as는 자바스크립트에도 존재하는 문법입니다. 모든 export들을 모아서 하나의 변수 안에 모아줍니다.

- [fontawesome - package-names]<https://fontawesome.com/v6/docs/apis/javascript/import-icons#package-names>


1. Babelrc 파일 설정
```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "loose": true
      }
    ]
  ],
  "plugins": [
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@mui/icons-material',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'icons',
    ],
  ]
}


// module.exports = { plugins };
```

## CORS 에러
- console.log(location.origin); 어플리케이션이 실행되고 있는 출처

- CORS란?
  - Cross-Origin Resource Sharing의 줄임말 : 교차 출처 리소스 공유(교차 출처란 다른 출처를 의미)

- SOP
  - CORS같은 정책
  - Same-Origin Policy (같은 출처에서만 리소스를 공유할 수 있다.)
  - 하지만 몇 가지 예외 조항을 두는데 그 중 하나가 "CORS" 정책을 지킨 리소스 요청이다.