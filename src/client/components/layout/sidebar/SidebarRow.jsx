import React, { useState, useEffect, useRef } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarRow = ({ Icon, title }) => {
  const [clicked, setClicked] = useState(undefined);
  const timerId = useRef(null);

  const onClick = () => {
    setClicked("clicked");
    timerId.current = setTimeout(() => {
      setClicked(null);
    }, 100)
  }

  useEffect(() => {
    return clearTimeout(timerId.current);
  }, [timerId]);

  return (
    <Container>
      <RowContainer onClick={onClick} clicked={clicked}>
        <FontAwesomeIcon icon={Icon} className="icon"/>
        <p className="title">{title}</p>
      </RowContainer>
    </Container>
  );
}

const Container = styled.div`
    flex: 0.05;
    min-width: 70px;
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px 0;

  :hover {
    cursor: pointer;
    background-color: ${({clicked}) => clicked ? "#d2d2d2" : "#f2f2f2"};
    transition: all 0.1s;
  }

  .title {
    margin: 0;
    font-family: Roboto, Arial, sans-serif;
    font-size: 10px;
    font-weight: 400;
  };

  .icon {
    margin-bottom: 6px;
    transform: scale(1.2);
  };
`


export default SidebarRow;