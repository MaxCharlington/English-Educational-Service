import $ from "jquery";
//import lib from './lib.js';
import '../sass/styles.scss';
var sha256 = require("js-sha256");

function b() { 
    let a = () => {console.log(sha256("Hello"))}; 
    a();
}

b();