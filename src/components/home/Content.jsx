// import React from 'react'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

function Content({ image, title, channel, views, timestamp,  }) {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="content__Info">
        <Avatar
          alt="junghyun-profile"
          src="https://avatars.githubusercontent.com/u/84281505?v=4"
        />
        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`

`

export default Content