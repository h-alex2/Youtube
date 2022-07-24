import React from 'react'
import styled from 'styled-components';
import SideClickRow from './SidebarClickRow';
import { useNavigate } from "react-router-dom";
import {
  faHouse,
  faCompass,
  faPaperPlane,
  faClapperboard,
  faPlay,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import YouTube_Logo_2017 from "src/images/YouTube_Logo_2017.svg";

const SidebarClickNav = ({ modalHandler }) => {
  const navigate = useNavigate();

  const refresh = () => {
    navigate("/");
  }


  return (
    <Container className='modal__nav'>
      <LeftContainer>
        <FontAwesomeIcon onClick={modalHandler} icon={faBars} className="icon" />
          <img
            onClick={refresh}
            className="youtube-logo"
            src={YouTube_Logo_2017}
            alt="Youtube logo"
          />
      </LeftContainer>
      <SideClickRow Icon={faHouse} title={"홈"} onClick={refresh} />
      <SideClickRow Icon={faCompass} title={"탐색"} />
      <SideClickRow Icon={faPaperPlane} title={"구독"} />
      <SideClickRow Icon={faYoutube} title={"Originals"} />
      <SideClickRow Icon={faPlay} title={"Youtube Music"} />
      <SideClickRow Icon={faClapperboard} title={"보관함"} />
      <hr />
    </Container>
  )
};

const Container = styled.div`
  background-color: white;
  position: absolute;
  flex: 0.05;
  min-width: 70px;
  z-index: 100;
  top: 0;
  left: 0;
  /* width: 100%; */
  height: 100%;

  hr {
    margin: 15px 25px 15px 0 ;
    border-top: 1px #E2E2E2;
  }
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 14px 18px 30px;

  .youtube-logo {
    cursor: pointer;
    height: 20px;
    object-fit: contain;
    margin-left: 30px;
  }

  .icon {
    cursor: pointer;
    transform: scale(1.5, 1.2);
  }


`

export default SidebarClickNav;