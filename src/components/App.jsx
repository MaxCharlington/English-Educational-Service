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
        let current = parseInt(getCookie('current'))
        if (!current) { //Check if user already used the app
            //Let user sign in to load provided course data
            pages.push(<SignIn setCourseData={(data) => this.setCourseData(data)} nextPage={() => this.nextPage()} />)
            current = 0
        }
        else {
            //Create pages from storage
            pages.push(null) //Instead of SignIn page for current value to work properly
            let courseData = JSON.parse(localStorage.getItem('courseData'))
            let course = courseData.map((e) => e.url ? 
                <Video url={e.url} next={()=>this.nextPage()} /> :
                <Question next={()=>this.nextPage()} quest={e.quest} ans={e.ans} rightNums={e.rightNums} />)
            pages.push(...course)
            pages.push(<Result/>)
        }
        this.state = {
            pages: pages,
            current: current
        }
        this.nextPage = this.nextPage.bind(this)
        this.setCourseData = this.setCourseData.bind(this)
    }  
    
    setCourseData(courseData) {
        //Storage
        localStorage.setItem('courseData', JSON.stringify(courseData))

        //State
        let pages = []
        let course = courseData.map((e) => e.url ? 
            <Video url={e.url} next={()=>this.nextPage()} /> :
            <Question next={()=>this.nextPage()} quest={e.quest} ans={e.ans} rightNums={e.rightNums} />)
        pages.push(...course)
        pages.push(<Result />)
        this.setState((prevState) => {
            return {
                pages: [...prevState.pages, ...pages],
                current: 0
            }
        })
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
        setTimeout(() => {
            let app = document.getElementById('app')
            if (app.firstChild.offsetHeight > window.innerHeight) {
                app.style.setProperty('--top', 'unset');
                app.style.setProperty('--transform', 'unset');
            }
            else {
                app.style.setProperty('--top', '50%');
                app.style.setProperty('--transform', 'translateY(-50%)');
            }
        }, 280);
        return this.state.pages[this.state.current]    
    }
}