import './animations.css';
import $ from 'jquery';

export default class Animations {
    constructor() {
        this.msDelay = 0;
    }

    fadeIn(elem) {
        elem.delay(this.msDelay += 50).queue(function () { $(this).show().addClass('fadeIn animated'); $(this).dequeue(); }).delay(1000).queue(function () { $(this).removeClass('fadeIn animated'); $(this).dequeue(); });
    }
 
    fadeInRight(elem) {
        elem.delay(this.msDelay += 50).queue(function () { elem.show().addClass('fadeInRightBig animated'); elem.dequeue(); }).delay(1000).queue(function () { elem.removeClass('fadeInRightBig animated'); elem.dequeue(); });
    }

    fadeOut(elem) {
        elem.delay(this.msDelay += 50).queue(function () { elem.addClass('fadeOut animated'); elem.dequeue(); }).delay(1000).queue(function () { elem.hide().removeClass('fadeOut animated').hide(); elem.dequeue(); });
    }

    fadeOutLeftRemove(elem) {
        elem.delay(this.msDelay += 50).queue(function () { elem.addClass('fadeOutLeftBig animated'); elem.dequeue(); }).delay(1000).queue(function () { elem.remove(); elem.dequeue(); });
    }

    fadeOutLeft(elem) {
        elem.delay(this.msDelay += 50).queue(function () { elem.addClass('fadeOutLeftBig animated'); elem.dequeue(); }).delay(1000).queue(function () { elem.removeClass('fadeOutLeftBig animated').hide(); elem.dequeue(); });
    }
    
    clearDelay() {
        this.msDelay = 0;
    }
}