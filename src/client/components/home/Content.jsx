import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Content = ({ video }) => {
  const [channelThumbnail, setChannelThumbnail] = useState("")
  const navigate = useNavigate();

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

  const onClick = () => {
    console.log(video.id);
    navigate(`/watch?v=${video.id}`, {
      state: {
        video: video,
      }
    });
  };

  return (
    <Container onClick={onClick}>
      <Thumbnail src={video.thumbnail} alt="" className='thumbnail'/>
      <Meta className="content__Info">
          <Avatar
            className="profile"
            alt="junghyun-profile"
            src={channelThumbnail}
          />
        <div className="content__all__meta">
          <p className="title">{video.title}</p>
          <div className="content__meta">
            <p>{video.channelTitle}</p>
            <p>{video.publishedAt}</p>
          </div>
        </div>
      </Meta>
    </Container>
  )
}

const Container = styled.div`
  width: auto;
  /* margin: 0 8px 40px 8px; */
  cursor: pointer;
`

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

const Meta = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;

  .profile {
    margin-top: 12px;
    margin-right: 12px;
  }

  p {
    margin: 0;
  }

  .title {
    font-size: 14px;
    margin: 12px 0 4px 0;
    max-height: 4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* display: block; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
  }

  .content__all__meta {
    padding-right: 24px;
    display: flex;
    flex-direction: column;
  }

  .content__meta {
    font-size: 12px;
    /* display: flex;
    flex-direction: row; */
  }
`

export default Content;