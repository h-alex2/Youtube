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
    <NavContainer>
      <SidebarRow Icon={faHouse} title={"홈"} onClick={onClick} />
      <SidebarRow Icon={faCompass} title={"탐색"} />
      <SidebarRow Icon={faPaperPlane} title={"구독"} />
      <SidebarRow Icon={faYoutube} title={"Originals"} />
      <SidebarRow Icon={faPlay} title={"Youtube Music"} />
      <SidebarRow Icon={faClapperboard} title={"보관함"} />
    </NavContainer>
  );
};

const NavContainer = styled.div`
  flex: 0.2;
  position: sticky;
  top : 56px;
  left : 0;
  height : 0;
`

export default SidebarNav;