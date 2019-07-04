import React from 'react'
import Player from 'react-player'

export default function Video(props) {
    return (
        <Player id='Player' url={props.url}/>
    )
}
