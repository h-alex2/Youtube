import React from 'react'
import styled from 'styled-components';
import Content from './Content';

const Contents = ({ videos }) => {
  console.log({videos: videos})
  return (
    <ContentsContainer>
      {videos.map(video => (
        <Content video={video} key={video.title}/>
      ))}
    </ContentsContainer>  )
}

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
`;

export default Contents