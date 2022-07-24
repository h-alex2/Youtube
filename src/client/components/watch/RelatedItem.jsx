import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const RelatedItem = ({ video }) => {
  const navigate = useNavigate();

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
      <Thumbnail src={video.thumbnail} alt="" />
      <Meta className="content__Info">
        <p className="title">{video.title}</p>
        <div className="channel__meta">
          <p>{video.channelTitle}</p>
          <p>{video.publishedAt}</p>
        </div>
      </Meta>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  width: 100%;
  height: 94px;
  cursor: pointer;
`

const Thumbnail = styled.img`
  flex: 0.2;
  width: 43%;
  height: auto;
  object-fit: cover;
  margin-right: 8px;
`

const Meta = styled.div`
  flex: 0.8;
  p {
    margin: 0;
  }

  .title {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    max-height: 4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
  }

  .channel__meta {
    font-size: 12px;
  }
`


export default RelatedItem;