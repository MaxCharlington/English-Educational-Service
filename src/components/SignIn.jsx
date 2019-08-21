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
                    <input className='input' type='text' name='num' placeholder='Номер студенческого' maxLength="6" value={this.state.number} onChange={this.handleChange}></input><br />
                    <input className='input' type='text' name='name' placeholder='ФИО' maxLength='50'></input>
                    <div className='button' onClick={() => {
                        this.props.setCourseData([
                            {url: 'http://localhost:3000/public/videos/1.mp4'}, 
                            { quest: 'Как дела?', ans: ['Норм', 'Збс', 'Шикардос', 'Ахенно'], rightNums: [2, 3] },
                            { quest: 'Как дела? Но это будет пример огромнрого вороса с пояснениями и огромным количеством "необходимой" информации, которая нужна просто чтобы мне было неудобно верстать такой вопрос, а больше в общем то ни для чего', ans: ['Норм', 'Збс', 'Шикардос', 'Ахенно'], rightNums: [2, 3] },
                            { quest: 'Как дела? Но это будет пример огромнрого вороса с пояснениями и огромным количеством "необходимой" информации, которая нужна просто чтобы мне было неудобно верстать такой вопрос, а больше в общем то ни для чего. Но на самом деле она может и не такая бесполезная, так как возможно прямо в вопросе содержится часть ответа', ans: ['Норм', 'Збс', 'Шикардос', 'Ахенно'], rightNums: [2, 3] }
                        ])
                        this.props.nextPage()
                        //lib.sendPost()
                        this.saveProfileData()
                    }}>Войти</div>
                </form>
            </div>
        )
    }
}
