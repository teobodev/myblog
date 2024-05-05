//bot token
var telegram_bot_id = "7011224060:AAFUp83dYkyDFYJE8ouwPXJ6Ai-b6OvZBFA"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = "-1002089685663"; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, nickname, project;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    nickname = document.getElementById("nickname").value;
    project = document.getElementById("project").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nTelegram: " + nickname + "\nWork: " + project;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);


    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nickname").value = "";
    document.getElementById("project").value = "";
    return false;
};0