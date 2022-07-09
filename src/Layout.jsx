import React, { useState } from "react";
import youtube, { getVideoSearch } from "./components/apis/youtube";
import Header from "home/Header";
import SideNav from "home/sidebar/SideNav";
import Contents from "home/Contents";
import styled from "styled-components";

const Layout = () => {
  const [video, setVideo] = useState([]);

  const onSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })

    console.log(response);
  }


  return (
    <LayoutContainer>
      <Header onSubmit={onSubmit} className="sticky"/>
      <div className="app__page">
        <SideNav />
        <Contents />
      </div>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  .app__page {
    display: flex;
    position: relative;
  }

  .click {
    position: absolute;
  }
`

export default Layout;