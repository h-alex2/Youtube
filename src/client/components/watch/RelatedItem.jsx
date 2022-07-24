import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const RelatedItem = ({ video }) => {
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

export default RelatedItem