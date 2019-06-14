import React, { Component } from 'react'
import Header from './Header'
import lib from '../js/lib';

export default class Registration extends Component {
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
        document.cookie.setItem('num', document.reg.num.value);
        document.cookie.setItem('name', document.reg.name.value);
    }

    render() {
        return (
            <div id='Registration'>
                <Header text='Регистрация' />
                <form name="reg">
                    <input type='text' name='num' placeholder='Номер студенческого' maxLength="6" value={this.state.number} onChange={this.handleChange}></input><br />
                    <input type='text' name='name' placeholder='ФИО' maxLength='50'></input>
                    <div onClick={() => {
                        //this.props.applyState()
                        //lib.sendPost()
                        this.saveProfileData()
                    }}>Войти</div>
                </form>
            </div>
        )
    }
}
