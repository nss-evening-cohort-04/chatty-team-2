//START CHATTY CONVERTER
var Chatty = (function(addDom) {
var messages = [];
addDom.addMessage = function(id, message) {
    messages.push({"id":id, "message":message})
};
addDom.setDefaultMessages = function() {
    messages = Chatty.getMessages();
};
addDom.getDefaultMessages = function() {
    return messages;
};
addDom.loadMessages = function() {
   Chatty.setDefaultMessages();
   var chattyMessagesDiv = document.getElementById("chatty-messages");
   var messagesHTML = "";
   console.log(messages.length);
  	for (var i = 0; i < messages.length; i++) {
   	 messagesHTML += `<div id="message-${messages[i].id}">${messages[i].message}</div>`;
  	}

};
return addDom;
})(Chatty || {});


