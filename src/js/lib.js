export function RandomStr(length = 16) {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function sendPost(request) {
    fetch("", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof request === 'object' ? JSON.stringify(request) : request
    }) 
    console.log('sent')   
}

export function sendGet(request) {
    return fetch("", {
        method: "get",
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
    var name = name + "="
    var ca = document.cookie.split(';')
    ca.forEach((c) => {
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            let rez = c.substring(name.length, c.length)
            console.log(rez)
            return rez
        }
    })
    return "";
}