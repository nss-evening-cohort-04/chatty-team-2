var Chatty = (function(domHandler){
var selectedMessage = null;

  //  remove message from DOM and array
   domHandler.deleteMessage = function(elementId){
    var id = elementId.substring(elementId.length - 8);
      Chatty.removeMessage(id);
      Chatty.removeEl(elementId);
   };

   domHandler.removeEl = function(id){
    var domElement = document.getElementById(id);
    domElement.parentNode.remove(domElement);
   };

   domHandler.editEl = function(elementId){
    document.getElementById("new-message").value = document.getElementById(elementId).querySelector(".message").innerHTML;
    selectedMessage = elementId;
   };
   domHandler.updateMessage = function(elementId, value){

    var id = elementId.substring(elementId.length - 1);
    var messages = Chatty.getMessages();
    var editedMsg = messages.find(function(message){
      return message.id == id;
    });

   editedMsg.message = value;
   editedMsg.modified = true;
   editedMsg.modifiedTimeStamp = new Date();
   editedMsg.modifiedBy = document.querySelector('input[name="users"]:checked').value;
   };

   domHandler.getSelectedMessage = function(){
    return selectedMessage;
   };
   domHandler.setSelectedMessage = function(elementId){
    selectedMessage = elementId;
   };



return domHandler;
})(Chatty  || {});
