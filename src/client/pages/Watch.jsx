import React from 'react'
import Header from 'components/layout/Header';
import PlayerWrapper from 'components/watch/PlayerWrapper';
import RelatedItems from 'components/watch/RelatedItems';
import styled from 'styled-components';
import { useLocation } from 'react-router';

const Watch = () => {
  const location = useLocation();
  const { video } = location.state;

  return (
    <>
      <Header />
      <ContentContainer>
        <PlayerWrapper video={video}/>
        <RelatedItems />
      </ContentContainer>
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;

`


export default Watch;