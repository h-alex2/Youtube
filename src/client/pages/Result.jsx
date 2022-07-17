import React from 'react'
import { useLocation } from 'react-router';
import Header from 'components/layout/Header';
import SidebarNav from 'components/layout/sidebar/SidebarNav';
import Contents from 'components/result/Contents';
import styled from 'styled-components';

const Result = () => {
  const location = useLocation();
  const { apiData } = location.state;

  return (
    <>
      <Header className="sticky"/>
      <ContentContainer className="app__page">
        <SidebarNav />
        <Contents videos={apiData} />
      </ContentContainer>
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default Result;
