var Chatty = (function() {

  // Private variable to store messages in
  var chattyMessagesDiv = document.getElementById("chatty-messages");

  var messages = [];
  counterId = 6;

  // Return the public interface that other code can interact with
  return {
    addMessage: function(id, message) {
      var user = document.querySelector('input[name="users"]:checked').value;
        messages.push({"id":id, "message":message, "user": user, "timestamp": new Date()})
    },
    removeMessage: function(id) {
      var selectedIndex = messages.findIndex(function(message){
        return message.id === id;
      });
      messages.splice(selectedIndex, 1);

   },
    getMessages: function() {
        return messages;
    },
    setMessages: function (xhrMessages) {
      messages = xhrMessages;
    },
    loadMessages: function() {
      chattyMessagesDiv.innerHTML = messages.map((message, i) => {
        if (message.modified) {
          content = `
          <div id="message-${message.id}">
            <span><b>${message.user}: </b></span>
            <span class="message">${message.message}</span>
            <span>(edited)</span>
            <span>${message.timestamp}</span>            
            <span>${message.modifiedTimeStamp}</span>            
            <span>Edited by: ${message.modifiedBy}</span>            
            <button type="button" id="message_${i}" onClick="Chatty.deleteMessage(this.id);">
              Delete
            </button>
            <button type="button" id="editBtn_${i}" onClick="Chatty.editEl('message-${message.id}');">
              Edit
            </button>
          </div>`;
        }
        else {
        content = `
          <div id="message-${message.id}">
            <span><b>${message.user}: </b></span>
            <span class="message">${message.message}</span>
            <span>${message.timestamp}</span>            
            <button type="button" id="message_${i}" onClick="Chatty.deleteMessage(this.id);">
              Delete
            </button>
            <button type="button" id="editBtn_${i}" onClick="Chatty.editEl('message-${message.id}');">
              Edit
            </button>
          </div>`;
        }
          return content;
      }).join("");
    },
    setCounterId: function() {
      return counterId++;
    },
    getCounterId: function() {
        return counterId;
    },
    clearMessages: function() {
        messages = [];
    }
  };
})();
