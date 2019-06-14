import React from 'react'

export default function Header(props) {
    return (
        <header><h1>{props.text || 'Application header'}</h1></header>
    )
}

