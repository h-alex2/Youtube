import React from 'react'
import styled from 'styled-components'
import Content from './Content';

const Contents = ({ videos }) => {
  return (
    <ContentsContainer>
      {videos.map(video => (
        <Content video={video} key={video.title}/>
      ))}
    </ContentsContainer>
  )
}

const ContentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin:-10px;  /* flex-direction: row;
  flex-wrap: wrap; */
  /* fleX: 1; */
`;


export default Contents 