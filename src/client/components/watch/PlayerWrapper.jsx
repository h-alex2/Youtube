import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';

const PlayerWrapper = ({ video }) => {
  const [channelThumbnail, setChannelThumbnail] = useState("")

  const loadChannelThumbnail = () => {
    axios.get('api/channel', {
      params: {
        channelId: video.channelId,
      }
    })
    .then((res) => setChannelThumbnail(res.data));
  };

  useEffect(() => {
    loadChannelThumbnail();
  }, []);

  return (
    <PlayerContainer>
      <Player
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      />
      <WatchMeta>
        <h3>{video.title}</h3>
        <hr />
        <ChannelData>
          <Avatar
              className="profile"
              alt="junghyun-profile"
              src={channelThumbnail}
          />
          <p className='channel__title'>{video.channelTitle}</p>
        </ChannelData>
          <p className='description'>{video.description}</p>
      </WatchMeta>
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  flex: 0.5;
  padding: 24px 24px 0 0;
`

const Player = styled.iframe`
  width: 640px;
  height: 360px;
  border: none;
`

const WatchMeta = styled.div`
  .description {
    margin-left: 64px;
  }

  .channel__title, .description {
    font-size: 14px;
  }
`

const ChannelData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .profile {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }
`

export default PlayerWrapper