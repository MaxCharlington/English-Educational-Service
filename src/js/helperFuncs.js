function randomStr(length = 16) {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export default {randomStr};