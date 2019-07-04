import React, { Component } from 'react'
import SignIn from './SignIn.jsx'
import Course from './Course.jsx';

const pages = ['SignIn', 'Course'];

export default class App extends Component {
    constructor() {       
        super()
        this.state = {
            page: 'SignIn'
        }
        this.nextPage = this.nextPage.bind(this);
    }  
    
    nextPage(props) {
        document.getElementById('app').firstChild.classList.toggle('zoomOutLeft')
        setTimeout(()=>{
            let page
            props && ({ page } = props)
            page ? this.setState({ page: page }) : this.setState((prevState) => {
                let next = pages[pages.indexOf(prevState.page) + 1]
                let dc = document.cookie

                //Skipping SignIn Page if already signed
                // if (next === 'SignIn' && dc.indexOf('name') > -1 && dc.indexOf('num') > -1)
                //     next = pages[pages.indexOf(next) + 1]

                return {page: next}
            })   
        }, 220)        
    }
    
    render() {
        switch (this.state.page) {
            case 'SignIn':
                return <SignIn nextPage={this.nextPage}/>
            case 'Course':
                return <Course />
        }
        return     
    }
}