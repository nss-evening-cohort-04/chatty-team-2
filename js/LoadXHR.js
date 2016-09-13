  var currentMessages = [];
//START CHATTY CONVERTER
var Chatty = (function(addDom) {

addDom.loadXhr = function() {
    var messageRequest = new XMLHttpRequest();
    messageRequest.addEventListener("load", function() {
        var data = JSON.parse(this.responseText);
        currentMessages = data.messages;
        console.log("loaded messages");
        Chatty.setMessages(currentMessages);
        Chatty.loadMessages();
    });
    messageRequest.addEventListener("error", function() {
        console.log("There was an error processing the file.");
    });
    messageRequest.open("GET", "messages.json");
    messageRequest.send();
}

addDom.getJSONMessages = function() {
   return currentMessages;
}

return addDom;
})(Chatty || {});
