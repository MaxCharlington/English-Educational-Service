import React from 'react'

const Element = (props) => {
    return (
        <div onClick={props.click}>
            {props.text || 'Text'}
        </div>
    )
}

export default Element