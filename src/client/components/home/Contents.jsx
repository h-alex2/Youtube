import React from 'react'
import styled from 'styled-components'
import Content from './Content';

const Contents = ({ videos }) => {
  return (
    <ContentsContainer className='content'>
      {videos.map(video => (
        <Content
          key={video.id}
          video={video}
        />
      ))}
    </ContentsContainer>
  )
}

const ContentsContainer = styled.div`
  display: grid;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(330px, auto));
  grid-gap: 1em;
  /* grid-template-columns: repeat(12, 1fr); */
  /* grid-auto-rows: 15em; */
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  /* grid-auto-columns: minmax(825px, auto); */
  /* grid-template-rows: auto; */
  /* grid-auto-rows: minmax(100px, auto); */

  @media (min-width: 1785px) {
    grid-template-columns: repeat(5, minmax(auto, auto));
  }

  @media (min-width:1130px) and (max-width:1784px) {
    grid-template-columns: repeat(4, minmax(250px, auto));
  }

  @media (min-width:890px) and (max-width:1129px) {
    grid-template-columns: repeat(3, minmax(250px, auto));
  }

  @media (min-width:510px) and (max-width:879px) {
    grid-template-columns: repeat(2, minmax(250px, auto));
  }

  @media (max-width:509px) {
    grid-template-columns: repeat(1, minmax(250px, auto));
  }
`;


export default Contents 