import React from 'react'
import styled from 'styled-components';
import SideClickRow from './SidebarClickRow';
import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function SidebarClickNav() {
  return (
    <Container>
      <SideClickRow Icon={faPaperPlane} title={"홈"} />
      <SideClickRow Icon={faPaperPlane} title={"탐색"} />
      <SideClickRow Icon={faPaperPlane} title={"구독"} />
      <SideClickRow Icon={faPaperPlane} title={"Originals"} />
      <SideClickRow Icon={faPaperPlane} title={"Youtube Music"} />
      <SideClickRow Icon={faPaperPlane} title={"보관함"} />
      <hr />
      <SideClickRow Icon={faPaperPlane} title={"보관함"} />
      <SideClickRow Icon={faPaperPlane} title={"시청 기록"} />
      <SideClickRow Icon={faPaperPlane} title={"내 동영상"} />
      <SideClickRow Icon={faPaperPlane} title={"내 영화"} />
      <SideClickRow Icon={faPaperPlane} title={"나중에 볼 동영상"} />
      <SideClickRow Icon={faPaperPlane} title={"오프라인 저장 동영상"} />
    </Container>
  )
};

const Container = styled.div`
  flex: 0.05;
  min-width: 70px;
  border: 1px solid black;
`

export default SidebarClickNav;