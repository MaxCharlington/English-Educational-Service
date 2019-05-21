//Sass styles
import '../styles/styles.scss';

//JS
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import Animations from '../animations/animations.js';
import lib from './lib.js';

class Registration extends React.Component {
    render() {
        return <div>{lib.RandomStr(10)}</div>;
    }
};

$('document').ready(() => {
    lib.ServerResponseAsync({'id': 235235}, (res)=>{console.log(res)});
    
    var anim = new Animations();

    $('body').show(); 
    $('header').hide();
    $("body main div").hide();

    anim.fadeIn($('header'));
    $("body main div").each(function (){
        anim.fadeInRight($(this));
    });
    
    $("body main div").click(e => {
        anim.clearDelay(); 
        anim.fadeOut($('header'));
        $("body main div").each(function () {            
            anim.fadeOutLeftRemove($(this));
        });
        setTimeout(() => {
            $('header h1').html('Войдите');
            anim.fadeIn($('header')); 
            ReactDOM.render(<Registration />, $("body main")[0]);
            $("body main div").hide();
            $("body main div").each(function () {
                anim.fadeInRight($(this));
            });
        }, 1000);
    });
});