import * as React from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components";
import SidebarRow from "./SidebarRow";
import {
  faHouse,
  faCompass,
  faPaperPlane,
  faClapperboard,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, } from "@fortawesome/free-brands-svg-icons";

const SidebarNav = () => {
  const navigate = useNavigate();

  const onClick = () => {
    console.log("click");
    navigate("/");
  }

  return (
    <NavContainer className='side__nav'>
      <div className='wrapper'>
        <SidebarRow Icon={faHouse} title={"홈"} onClick={onClick} />
        <SidebarRow Icon={faCompass} title={"탐색"} />
        <SidebarRow Icon={faPaperPlane} title={"구독"} />
        <SidebarRow Icon={faYoutube} title={"Originals"} />
        <SidebarRow Icon={faPlay} title={"Youtube Music"} />
        <SidebarRow Icon={faClapperboard} title={"보관함"} />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  flex: 0.2;
  max-width: 70px;
  position: sticky;
  top : 56px;
  left : 0;
  height : 0;
  /* background-color: white; */

  @media (max-width: 790px) {
    display: none;
  }

  .wrapper {
    background-color: white;
    height: 100vh;
  }
`

export default SidebarNav;