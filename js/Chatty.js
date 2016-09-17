var Chatty = (function () {

  // Private variable to store messages in
  var chattyMessagesDiv = document.getElementById("chatty-messages");

  var messages = [];
  counterId = 6;

  // Return the public interface that other code can interact with
  return {
    addMessage: function (id, message) {
      var user = document.querySelector('input[name="users"]:checked').value;
      messages.push({
        "id": id,
        "message": message,
        "user": user,
        "timestamp": new Date()
      });
    },
    removeMessage: function (id) {
      var selectedIndex = messages.findIndex(function (message) {
        return message.id == id;
      });
      messages.splice(selectedIndex, 1);
      Chatty.loadMessages();
    },
    getMessages: function () {
      return messages;
    },
    setMessages: function (xhrMessages) {
      messages = xhrMessages;
    },
    loadMessages: function () {
      var user = document.querySelector('input[name="users"]:checked').value;
      let content;
      if(document.getElementById("load-twenty").checked){
        var cpMessages = JSON.parse(JSON.stringify(messages.slice(-20)));
      }else{
        var cpMessages = messages;
      }
      chattyMessagesDiv.innerHTML = cpMessages.map((message, i) => {
        content = "";
        content += `<div id="message-${message.id}" class="message-block">`;
        content += `  <span><b>${message.user}: </b></span>`;
        content += `  <span class="message">${message.message}</span>`;
        if (message.modified) {
          content += `  <span>(edited)</span>`;
        }
        if (message.modified) {
          content += `  <span class="pull-right"> (modified at ${new Date(message.modifiedTimeStamp).toLocaleString()})</span>`;
        } else {
          content += `   <span class="pull-right">${new Date(message.timestamp).toLocaleString()}</span>`;
        }
        if (message.user === user) {
          content += `  <button type="button" id="editBtn_${i}" class="btn  btn-default btn-xs message-btn pull-right" onClick="Chatty.editEl('message-${message.id}');">`;
          content += `    Edit`;
          content += `  </button>`;
          content += `  <button type="button" id="message_${i}" class="btn btn-danger btn-xs message-btn pull-right" onClick="Chatty.deleteMessage('message-${message.id}');">`;
          content += `    Delete`;
          content += `  </button>`;
        }
        content += `</div>`;
        return content;
      }).join("");
    },
    setCounterId: function () {
      return counterId++;
    },
    getCounterId: function () {
      return counterId;
    },
    clearMessages: function () {
      messages = [];
    }
  };
})();
