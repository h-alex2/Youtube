import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from 'components/layout/Header';
import SidebarNav from 'components/layout/sidebar/SidebarNav';
import Contents from 'components/home/Contents';
import styled from 'styled-components';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [homeVideos, setHomeVideos] = useState([]);


  useEffect( () => {
    const check = async () => {
      const response = await axios('/api/result')
      setVideos(response.data);
    };
    check();
  }, [])

  return (
    <>
      <Header className="sticky"/>
      <ContentContainer className="app__page">
        <SidebarNav />
        <Contents videos={videos} />
      </ContentContainer>
    </>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default Home;
