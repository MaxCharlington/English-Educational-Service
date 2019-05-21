import $ from 'jquery';

function RandomStr(length = 16) {
    var text = "";
    var possible = "ABCDEF0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function ServerResponseAsync(request, onRespond) {
    $.ajax({
        url: "/",
        type: "POST",
        dataType: "json",
        data: typeof request === 'object' ? request : JSON.parse(request),
        contentType: "application/x-www-form-urlencoded",
        success: onRespond || null
    });
}

export default { RandomStr, ServerResponseAsync};