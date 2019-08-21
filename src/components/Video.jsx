import React from 'react'
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

export default props => {
    return (
        <div id='Video' className="zoomInRight animated flashy">
            <Player>
                <source src={props.url} />
            </Player>
            <div className='button' onClick={()=>props.next()}>Перейти к вопросам ➜</div>
        </div>
    );
};
