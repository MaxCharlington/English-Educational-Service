//Sass styles
import '../styles/styles.scss';

//JS
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

//Custom project related scripts
import Animations from '../animations/animations.js';
import lib from './lib.js';

//React app component
import App from '../components/App';

$('document').ready(() => {
    var anim = new Animations();
    ReactDOM.render(<App />, $(".app")[0]);
});