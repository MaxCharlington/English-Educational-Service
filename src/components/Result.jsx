import React, { Component } from 'react'

// export default function Result() {
//     return (
//         <div id='Result' className="zoomInRight animated flashy">
//             <h1 className="comment">Ваш результат:</h1>
//             <div className="result">{get('','/result')} правильных ответов</div>
//         </div>
//     )
// }


export default class Result extends Component {
    constructor() {
        super();
        this.state = { result: '' };
    }

    componentDidMount() {
        fetch('/result')
            .then(res => res.json())
            .then(json => this.setState(json));
    }

    render() {
        return (
            <div id='Result' className="zoomInRight animated flashy">
                <h1 className="comment">Ваш результат:</h1>
                <div className="result">{this.state.result} правильных ответов</div>
            </div>
        )
    }
}

