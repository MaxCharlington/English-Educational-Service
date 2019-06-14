import React, { Component } from 'react'
import CourseList from './CourseList'
import Registration from './Registration'

const pages = ['CourseList', 'Registration', 'Course'];

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            page: 'CourseList'
        }
        this.applyState = this.applyState.bind(this);
    }  
    
    applyState(state) {
        state ? this.setState({ page: state }) : this.setState({ page: pages[pages.indexOf(this.state.page) + 1] })
    }

    animate() {
        document.getElementById('app').children
    }
    
    render() {
        switch (this.state.page) {
            case 'CourseList':
                return <CourseList names={['En', 'Fr', 'Gm']} applyState={this.applyState}/>
            case 'Registration':
                return <Registration applyState={this.applyState}/>
            case 'Course':
                return
        }
        return     
    }
}