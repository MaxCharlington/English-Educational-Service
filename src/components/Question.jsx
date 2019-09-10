import React, { Component } from 'react'

export default class Question extends Component {

    constructor() {
        super()
    }

    ansClicked(n) {
        //Put answer into database 
        this.props.next()
    }

    render() {
        return (
            <div id='Question' className="zoomInRight animated flashy">
                <div className="quest">{this.props.quest}</div>
                <div className="ans" onClick={() => this.ansClicked(0)}>{this.props.ans[0]}</div>
                <div className="ans" onClick={() => this.ansClicked(1)}>{this.props.ans[1]}</div>
                <div className="ans" onClick={() => this.ansClicked(2)}>{this.props.ans[2]}</div>
                <div className="ans" onClick={() => this.ansClicked(3)}>{this.props.ans[3]}</div>
            </div>
        )
    }
}

