import React, { Component } from 'react'
import {setCookie} from '../js/lib'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = { number: "" }
        this.handleChange = this.handleChange.bind(this)
    } 

    handleChange(e) {
        //Handles number input
        if (e.target.getAttribute('name') === 'num') {
            this.setState({
                number: e.target.value.replace(/[^0-9]/, '')
            })
        }
        //Enables/Disables button
        this.buttonHandler()
    }

    buttonHandler() {
        let inputsMatch = document.reg.num.value.match(/^\d\d\d\d\d\d$/) && document.reg.name.value.match(/^[А-Я][а-я]+\s[А-Я][а-я]+\s[А-Я][а-я]+$|^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/u)
        if ((document.querySelector('div.button.disabled') && inputsMatch) || (!inputsMatch && !document.querySelector('div.button.disabled'))) {
            document.querySelector('div.button').classList.toggle('disabled')
        }
     }

    saveProfileData() {
        setCookie('num', document.reg.num.value)
        setCookie('name', document.reg.name.value)
    }

    render() {
        return (
            <div id='SignIn' className="zoomInRight animated flashy">
                <h1 className="comment">Введите ваши данные</h1>
                <form name="reg">
                    <input className='input' type='text' name='num' placeholder='Номер студенческого' maxLength="6" value={this.state.number} onChange={this.handleChange}></input><br />
                    <input className='input' type='text' name='name' placeholder='ФИО' maxLength='50' onChange={this.handleChange}></input>
                    <div className='button disabled' onClick={() => {
                        this.saveProfileData()

                        let urlCourse = new URL(document.URL + 'course'),
                            params = { num: reg.num.value, name: reg.name.value }
                        Object.keys(params).forEach(key => urlCourse.searchParams.append(key, params[key]))

                        //Getting course data
                        fetch(urlCourse)
                            .then(res => res.json())
                            .then(jsonCourse => {
                                let urlCurrent = new URL(document.URL + 'current') //Params are the same
                                Object.keys(params).forEach(key => urlCurrent.searchParams.append(key, params[key]))

                                //Getting current progress
                                fetch(urlCurrent)
                                    .then(res => res.json())
                                    .then(jsonCurrent => {
                                        this.props.setCourseData(jsonCourse, jsonCurrent.current)                                        
                                        this.props.nextPage()
                                    })
                            })
                    }}>Войти</div>
                </form>
            </div>
        )
    }
}
