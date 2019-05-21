import React, { Component } from 'react'
import Header from "./Header"
import Registration from "./Registration"

export default class App extends Component {
    render() {
        return (
            <div id = "App">
                <Header text="Курсы"/>
                <Registration/>
            </div>
        )
    }
}
