import React from 'react'
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export default props => {
    return (
        <div id='Video'>
            <Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
            <div className='button' onClick={props.next}>Перейти к вопросам ➜</div>
        </div>
    );
};
