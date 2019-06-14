function RandomStr(length = 16) {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function sendPost(request) {
    fetch("", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof request === 'object' ? JSON.stringify(request) : request
    }) 
    console.log('sent')   
}

function sendGet(request) {
    return fetch("", {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof request === 'object' ? JSON.stringify(request) : request
    }) 
}
export default { RandomStr, sendPost};