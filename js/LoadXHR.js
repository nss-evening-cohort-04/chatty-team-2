  var currentMessages = [];
//START CHATTY CONVERTER
var Chatty = (function(addDom) {
    addDom.loadXhr = function() {
        var jsonFiles = ["json/message1.json", "json/message2.json", "json/message3.json", "json/message4.json", "json/message5.json"];
        for(var i = 0; i < jsonFiles.length; i++) {
        var messageRequest = new XMLHttpRequest();
        messageRequest.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            for(var i = 0; i < data.messages.length; i++) {
                currentMessages.push(data.messages[i]);
            }
            Chatty.setMessages(currentMessages);
            Chatty.loadMessages();
        });
        messageRequest.addEventListener("error", Chatty.onError)
        messageRequest.open("GET", jsonFiles[i]);
        messageRequest.send();
    }
}

addDom.getJSONMessages = function() {
   return currentMessages;
}

addDom.onError = function() {
    console.log("There was an error processing the file.");
}

return addDom;
})(Chatty || {});
