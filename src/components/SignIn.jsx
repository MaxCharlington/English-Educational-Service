import React, { Component } from 'react'
import {setCookie} from '../js/lib'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = { number: "" };
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(e) {
        this.setState({
            number: e.target.value.replace(/[^0-9]/, '')
        });
    };

    saveProfileData() {
        setCookie('num', document.reg.num.value)
        setCookie('name', document.reg.name.value)
    }

    render() {
        return (
            <div id='SignIn' className="zoomInRight animated flashy">
                <h1>Войдите</h1>
                <form name="reg">
                    <input type='text' name='num' placeholder='Номер студенческого' maxLength="6" value={this.state.number} onChange={this.handleChange}></input><br />
                    <input type='text' name='name' placeholder='ФИО' maxLength='50'></input>
                    <div onClick={() => {
                        this.props.nextPage()
                        //lib.sendPost()
                        this.saveProfileData()
                    }}>Войти</div>
                </form>
            </div>
        )
    }
}
