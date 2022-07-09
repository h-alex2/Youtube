import React from 'react'
import styled from 'styled-components'
import Content from './Content';

function Contents() {
  return (
    <ContentsContainer>
      <Content />
      <Content />
      <Content />
      <Content />
      <Content />
    </ContentsContainer>
  )
}

const ContentsContainer = styled.div`
  flex: 1;
  border: 1px solid black;
`;


export default Contents