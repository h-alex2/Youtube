import React, { useState, useEffect, useRef } from 'react';
import SidebarClickNav from './SidebarClickNav';
import styled, { css, keyframes } from 'styled-components';

const ModalSidebar = ({ modal__nav, modalClickHandler, isModal, modal }) => {
  return (
    <>
      <ModalBackgroundColor
        isModal={isModal}
        modal={modal}
        onClick={modalClickHandler}
      />
      <SidebarClickNav
        className={modal__nav}
        modal={modal}
        isModal={isModal}
      />
    </>
  )
}

const slideToRight = keyframes`
  from {
    transform: translateX(-250px);
  }
  to {
    transform: translateX(0px);
  }
`

const slideToLeft = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-250px);
  }
`;

const ModalBackgroundColor = styled.div`
  display: ${(props) => props.isModal ? "visibility" : "none"};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 100;

  .modal__nav {
    /* transform: translateX(-250px); */
    ${(props) => props.modal &&
    css`
      transform: translateX(-250px);
    `}

    ${(props) => !props.modal &&
    css`
      transform: translateX(-250px);
    `}
    /* left: 100%;
    z-index: 200;
    position: absolute;
    left: 0;
    top: 0; */
    /* transform: translateX(-250px); */
    /* animation: ${(props) => props.modal ? slideToLeft : slideToLeft} 0.15s ease-out; */
    /* transform: ${(props) => props.modal ? "translateX(0px) 0.15s ease-out;" : "translateX(-250px)"}; */
  }
`


export default ModalSidebar;