import React, { Component } from 'react'
import Question from './Question.jsx'
import Video from './Video.jsx'
import Result from './Result.jsx'

export default class Course extends Component {
    constructor() {
        super()
        this.state = {
            courseData: [{url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'}], //Initialize from database
            current: 0 //Get from localstorage
        }
        this.next = this.next.bind(this);
    }

    next() {
        this.setState((prevState)=>{
            prevState.current++
            return prevState
        })
    }

    render() {
        let currentPage = this.state.courseData[this.state.current]
        return (
            currentPage.url ? 
                <Video url={currentPage.url} /> : <Question quest={currentPage.quest} ans={currentPage.ans} rightNums={currentPage.rightNums}/>
        )
    }
}
