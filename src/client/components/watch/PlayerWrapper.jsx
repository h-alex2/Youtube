import React from 'react'
import styled from 'styled-components'

const PlayerWrapper = () => {
  return (
    <div className="player">
      <Player
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/wCs6M1LSWoc"
        frameborder="0"
        allowfullscreen
      />
      <WatchMeta>

      </WatchMeta>
    </div>
  )
}

const Player = styled.iframe`

`

const WatchMeta = styled.div`

`

export default PlayerWrapper