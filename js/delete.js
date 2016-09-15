var Chatty = (function (domHandler) {
  var selectedMessage = null;

  //  remove message from DOM and array
  domHandler.deleteMessage = function (elementId) {
    var id = elementId.substring(8);
    Chatty.removeEl(elementId);
    Chatty.removeMessage(id);
  };

  domHandler.removeEl = function (id) {
    var domElement = document.getElementById(id);
    domElement.remove(domElement);
  };

  domHandler.editEl = function (elementId) {
    document.getElementById("new-message").value = document.getElementById(elementId).querySelector(".message").innerHTML;
    selectedMessage = elementId;
    document.getElementById('new-message').focus();
  };
  domHandler.updateMessage = function (elementId, value) {
    var id = elementId.substring(8);
    var messages = Chatty.getMessages();
    var messageIndex = messages.findIndex(function (message) {
      return message.id == id;
    });
    var editedMsg = messages[messageIndex];
    if(editedMsg.message !== value){
      editedMsg.message = value;
      editedMsg.modified = true;
      editedMsg.modifiedTimeStamp = new Date();
    }
  };

  domHandler.getSelectedMessage = function () {
    return selectedMessage;
  };
  domHandler.setSelectedMessage = function (elementId) {
    selectedMessage = elementId;
  };

  return domHandler;
})(Chatty || {});
