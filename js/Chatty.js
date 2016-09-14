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
      console.log("id to remove", id);
      var selectedIndex = messages.findIndex(function(message){
        return message.id == id;
      });
      console.log("selectedIndex", selectedIndex);
      messages.splice(selectedIndex, 1);
      Chatty.loadMessages();
   },
    getMessages: function() {
        return messages;
    },
    setMessages: function (xhrMessages) {
      messages = xhrMessages;
    },
    loadMessages: function() {
      chattyMessagesDiv.innerHTML = messages.slice(-20).map((message, i) => {
        if (message.modified) {
          content = `
          <div class="row">
          <div id="message-${message.id}" class="message-block">
            <span><b>${message.user}: </b></span>
            <span class="message">${message.message}</span>
            <span>(edited)</span>
            <button type="button" id="editBtn_${i}" class="pull-right" onClick="Chatty.editEl('message-${message.id}');">
              Edit
            </button>
            <button type="button" id="message_${i}" class="pull-right" onClick="Chatty.deleteMessage('message-${message.id}');">
              Delete
            </button>
            <span class="pull-right"> at ${new Date(message.modifiedTimeStamp).toLocaleString()}</span>
            <span class="pull-right">Edited by: ${message.modifiedBy} </span>
          </div>
          </div>`;
        }
        else {
        content = `
<div class="row">
          <div id="message-${message.id}" class="message-block">
            <span><b>${message.user}: </b></span>
            <span class="message">${message.message}</span>
            <button type="button" id="editBtn_${i}" class="pull-right" onClick="Chatty.editEl('message-${message.id}');">
              Edit
            </button>
            <button type="button" id="message_${i}" class="pull-right" onClick="Chatty.deleteMessage('message-${message.id}');">
              Delete
            </button>
            <span class="pull-right">${new Date(message.timestamp).toLocaleString()}</span>
          </div>
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
