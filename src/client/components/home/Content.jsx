import * as React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const Content = ({ video }) => {
  useEffect(() => {
    console.log("hihihi")
    const check = async () => {
      const response = await axios('api/channels', {
        params: {
          channelId: video.channelId,
        }
      });
    };
    check();
  }, []);

  return (
    <Container>
      <Thumbnail src={video.thumbnails.high.url} alt="" />
      <Meta className="content__Info">
          <Avatar
            className="profile"
            alt="junghyun-profile"
            src="https://avatars.githubusercontent.com/u/84281505?v=4"
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
  flex: 1 1;
  margin-bottom: 40px;
`

const Thumbnail = styled.img`
  width: 280px;
  height: 155px;
  object-fit: cover;
`

const Meta = styled.div`
  width: 280px;
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