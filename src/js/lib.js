export function RandomStr(length = 16) {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function post(url, request) {
    fetch(url, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof request === 'object' ? JSON.stringify(request) : request
    })  
}

export function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/;}`;
}

export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}