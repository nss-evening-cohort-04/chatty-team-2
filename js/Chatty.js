var Chatty = (function() {

  // Private variable to store messages in
  var chattyMessagesDiv = document.getElementById("chatty-messages");

  var messages = [];
  counterId = 6;

  // Return the public interface that other code can interact with
  return {
    addMessage: function(id, message) {
        messages.push({"id":id, "message":message})
    },
    getMessages: function() {
        return messages;
    },
    setMessages: function (xhrMessages) {
      messages = xhrMessages;
    },
    loadMessages: function() {
      var messagesHTML = "";
      for (var i = 0; i < messages.length; i++) {
        messagesHTML += `<div id="message-${messages[i].id}">${messages[i].message}</div>`;
      }
      chattyMessagesDiv.innerHTML = messagesHTML;
    },
    setCounterId: function() {
      return counterId++;
    },
    getCounterId: function() {
        return counterId;
    }
  };
})();
