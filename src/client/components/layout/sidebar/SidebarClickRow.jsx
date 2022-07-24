import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarClickRow = ({ Icon, title }) => {
  const [clicked, setClicked] = useState(undefined);
  const timerId = useRef(null);

  return (
    <RowContainer clicked={clicked}>
      <FontAwesomeIcon icon={Icon} className="icon" />
      <p className="title">{title}</p>
    </RowContainer>
  );
}

const RowContainer = styled.div`
  display: flex;
  width: 200px;
  flex-direction: row;
  align-items: center;
  height: 43px;
  padding: 0px 24px;
  background-color: white;
  z-index: 100;

  :hover {
    cursor: pointer;
    background-color: ${({clicked}) => clicked ? "#d2d2d2" : "#f2f2f2"};
    transition: all 0.1s;
  }

  .title {
    margin: 0;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 20px;
  };

  .icon {
    margin-bottom: 6px;
    width: 24px;
    margin: 0;
  };
`


export default SidebarClickRow;