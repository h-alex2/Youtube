# Note

## style

css loader
resolve

스니펫
rfce


npm install @mui/material @emotion/react @emotion/styled 설치
https://mui.com/material-ui/getting-started/installation/

import 에러
npm i babel-plugin-transform-imports

npm install @mui/icons-material 그냥 이걸 안깔아서 생긴 에러

- 이미지 크롭할 때
object-fit

https://webpack.kr/guides/build-performance/

https://mui.com/material-ui/guides/minimizing-bundle-size/

세로 사이즈 맞추기

node 모듈 전체가 번들링 될 필요는 없다.
babel에 exclude 노드 했는데 mui에서 에러남. 찾아보니 내가 쓴 impot는 babel이 필요한 거라서 에러났던 거였음. 그래서 import 방식을 바꿔줌.

그 전에 쓴 방식과 지금 쓰는 방식의 속도는 6배 차이라고함. (전에 쓴 방식이 느리다고)

babel에 include: path.resolve(__dirname, "src"), 해서 src 코드만 babel적용하게 해줌.


Styled-components(3) 자식 컴포넌트에  커스텀 css  props로 전달하기
출처: https://devbirdfeet.tistory.com/177 [새발개발자:티스토리]

!important 속성값 강제 우선적용

flex: 0.2; 20%만큼만 차지 0 ~ 1값  
<img src="./assets/readme_assets/220705-01.png" />


---
- prop으로 selected전달
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

- 상단에 바로 뜨는 걸 모달이라고 하는구나

- 트리 쉐이킹


## import * as React from 'react'

- Cannot read properties of null (reading 'useContext') 이 에러때문에 미치겠음

- mui 에러가 자꾸 나서 font-awesome으로 바꿔버림.
// import HomeIcon from "@mui/icons-material/Home";
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
// import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import PlaylistPlaySharpIcon from '@mui/icons-material/PlaylistPlaySharp';

<에러 이유>
- import * as React from 'react' 이렇게 해주질 않아서 그랬다.
- export default 없는 애들이나 module.exports로 된 애들은 * as로 해야 합니다. * as는 자바스크립트에도 존재하는 문법입니다. 모든 export들을 모아서 하나의 변수 안에 모아줍니다.

- [fontawesome - package-names]<https://fontawesome.com/v6/docs/apis/javascript/import-icons#package-names>
