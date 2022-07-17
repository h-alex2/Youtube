import React from 'react'
import Header from 'components/layout/Header';
import PlayerWrapper from 'components/watch/PlayerWrapper';
import RelatedItems from 'components/watch/RelatedItems';
import styled from 'styled-components';

const Watch = ({ player, items }) => {
  return (
    <>
      <Header />
      <ContentContainer>
        <PlayerWrapper  className={player} />
        <RelatedItems className={items} />
        <div className="hi">hi</div>
      </ContentContainer>
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .player {
    color: red;
  }
  .items {
    color: yellow;
  }
`


export default Watch;