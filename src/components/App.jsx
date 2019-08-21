import React, { Component } from 'react'
import SignIn from './SignIn.jsx'
import Question from './Question.jsx'
import Video from './Video.jsx'
import Result from './Result.jsx'
import {setCookie, getCookie} from '../js/lib.js'

export default class App extends Component {
    constructor() {       
        super()
        let pages = [] 
        console.log(getCookie('current'))
        let current = parseInt(getCookie('current'))
        let signedIn = current ? true : false
        if (!signedIn) {
            pages.push(<SignIn setCourseData={(data) => this.setCourseData(data)} nextPage={() => this.nextPage()} />)
            current = 0
        }
        else {
            let courseData = JSON.parse(localStorage.getItem('courseData'))
            let course = courseData.map((e) => e.url ? 
                <Video url={e.url} next={()=>this.nextPage()} /> :
                <Question next={()=>this.nextPage()} quest={e.quest} ans={e.ans} rightNums={e.rightNums} />)
            pages.push(...course)
        }
        this.state = {
            pages: pages,
            current: current
        }
        this.nextPage = this.nextPage.bind(this)
        this.setCourseData = this.setCourseData.bind(this)
    }  
    
    setCourseData(courseData) {
        let pages = []
        let current = 0
        let course = courseData.map((e) => e.url ? 
            <Video url={e.url} next={()=>this.nextPage()} /> :
            <Question next={()=>this.nextPage()} quest={e.quest} ans={e.ans} rightNums={e.rightNums} />)
        pages.push(...course)
        this.setState((prevState) => {
            return {
                pages: [...prevState.pages, ...pages],
                current: 0
            }
        })
        console.log(JSON.stringify(courseData))
        localStorage.setItem('courseData', JSON.stringify(courseData))
    }

    nextPage() {
        document.getElementById('app').firstChild.classList.toggle('zoomOutLeft')
        setTimeout(() => {
            document.getElementById('app').firstChild.classList.toggle('zoomOutLeft')
            this.setState((prevState) => {
                setCookie('current', prevState.current + 1)
                return {
                    pages: prevState.pages,
                    current: prevState.current + 1
                }
            })
            this.forceUpdate();   
        }, 220)        
    }
    
    render() {
        return this.state.pages[this.state.current]    
    }
}