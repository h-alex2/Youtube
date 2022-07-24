import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Header from 'components/layout/Header';
import ModalSidebar from 'components/layout/sidebar/ModalSidebar';
import SidebarNav from 'components/layout/sidebar/SidebarNav';
import Contents from 'components/home/Contents';
import styled, { css } from 'styled-components';

const Home = ({ side__nav, content }) => {
  const [videos, setVideos] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState(false);
  let timerId = useRef();

  useEffect(() => {
    const check = async () => {
      const response = await axios('/api/videos');
      setVideos(response.data);
    };
    check();
  }, [])

  console.log({isModal:isModal, modal:modal})
  const modalClickHandler = () => {
    setModal(!modal);
    if (!isModal) setIsModal(true);
    if (modal) {
      timerId = setTimeout(() => {
        console.log("왜")
        setIsModal(false);
      }, 2000)
    }
  }

  useEffect(() => {
    if (timerId) return clearTimeout(timerId);
  }, [modal])

  return (
    <HomeContainer isModal={isModal}>
      <ModalSidebar
        modalClickHandler={modalClickHandler}
        isModal={isModal}
        modal={modal}
      />
      <Header modalClickHandler={modalClickHandler} isModal={isModal} />
      <ContentContainer className="app__page" isModal={isModal} >
        <SidebarNav className={side__nav} />
        <Contents className={content} videos={videos} />
      </ContentContainer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  background-color: #f9f9f9;
  height: auto;

  ${({ isModal }) =>
  isModal &&
  css`
    overflow-y: scroll;
    position: fixed;
  `
  }

  /* .modal__bg {
    display: ${(props) => !props.isModal && "none"};
  } */
`

const ContentContainer = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: row;
`

export default Home;
