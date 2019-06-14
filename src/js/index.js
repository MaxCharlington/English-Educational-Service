//Sass styles
import '../styles/styles.scss'

//Animations
import '../styles/animations.css'

//JS
import React from "react"
import ReactDOM from "react-dom"

//Custom project related scripts

//React app component
import App from '../components/App'

window.onload = ()=>{
    ReactDOM.render(<App />, document.getElementById('app'));
    if (!navigator.cookieEnabled) {
        alert('Включите cookie для комфортной работы с этим сайтом');
    }
};