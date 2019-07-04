//Animations and styling
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
import '../styles/animations.css'

//JS
import React from "react"
import ReactDOM from "react-dom"

//Custom project related scripts
//import lib from './lib'

//React app component
import App from '../components/App.jsx'

window.onload = () => {
    ReactDOM.render(<App />, document.getElementById('app'));
    if (!navigator.cookieEnabled) {
        let a = 8;
        alert('Включите cookie для комфортной работы с этим сайтом');
    }
}

window.onunload = function () { null };