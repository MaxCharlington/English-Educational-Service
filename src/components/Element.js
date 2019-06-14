import React from 'react'

const Element = (props) => {
    return (
        <div onClick={()=>props.applyState()}>
            {props.text || 'Text'}
        </div>
    )
}

export default Element