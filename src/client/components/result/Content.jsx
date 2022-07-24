import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Content = ({ video }) => {
  const [channelThumbnail, setChannelThumbnail] = useState("");
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
    console.log("video",video);
    console.log("video");
    navigate(`/watch?v=${video.id}`, {
      state: {
        video: video,
      }
    });
  };

  return (
    <Container onClick={onClick}>
      <a>
        <Thumbnail src={video.thumbnail} alt="" />
      </a>
      <Meta className="content__Info">
          <p className="title">{video.title}</p>
          <p className="small__text">{video.publishedAt}</p>
          <div className="channel__meta">
            <Avatar
              className="profile"
              alt="junghyun-profile"
              src={channelThumbnail}
            />
            <p>{video.channelTitle}</p>
          </div>
          <p className="small__text">{video.description}</p>
      </Meta>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 10px;
  cursor: pointer;
`

const Thumbnail = styled.img`
  flex: 0.32;
  width: 360px;
  height: 200px;
  object-fit: cover;
  margin-right: 16px;
`

const Meta = styled.div`
  flex: 0.68;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5rem;
    max-height: 4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* display: block; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
  }

  .channel__meta {
    padding: 12px 0;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .profile {
    width: 25px;
    height: 25px;
    margin-top: 12px;
    margin-right: 12px;
  }

  .small__text {
    font-size: 12px;
  }
`
export default Content;