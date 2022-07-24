import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RelatedItem from './RelatedItem';
import styled from 'styled-components';


const RelatedItems = () => {
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    const check = async () => {
      const response = await axios('/api/videos');
      setVideos(response.data);
    };
    check();
  }, [])

  return (
    <ItemContainer>
      {videos.map(video => (
        <RelatedItem video={video} key={video.title} />
      ))}
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  flex: 0.36;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 0;

`

export default RelatedItems;