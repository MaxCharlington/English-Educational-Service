import $ from "jquery";
import lib from './lib.js';

window.onload = () => {
    $('body').html(lib.randomStr(5));
}