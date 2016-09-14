var Chatty = (function(domHandler){
var selectedMessage = null;

  //  remove message from DOM and array
   domHandler.deleteMessage = function(elementId){
    console.log(elementId);
    var id = elementId.substring(8);
      console.log("id",id);
      Chatty.removeEl(elementId);
      Chatty.removeMessage(id);
   };

   domHandler.removeEl = function(id){
    var domElement = document.getElementById(id);
    domElement.remove(domElement);
   };

   domHandler.editEl = function(elementId){
    document.getElementById("new-message").value = document.getElementById(elementId).querySelector(".message").innerHTML;
    selectedMessage = elementId;
    console.log("editEl selectedMessage", selectedMessage);
   };
   domHandler.updateMessage = function(elementId, value){
    var id = elementId.substring(8);
    console.log("id",id);
    var messages = Chatty.getMessages();
    var messageIndex = messages.findIndex(function(message){
      return message.id == id;
    });
    console.log("messageIndex", messageIndex);
     var editedMsg = messages[messageIndex];
console.log("editedMsg", editedMsg);
     editedMsg.message = value;
     editedMsg.modified = true;
     editedMsg.modifiedTimeStamp = new Date();
     editedMsg.modifiedBy = document.querySelector('input[name="users"]:checked').value;
   };

   domHandler.getSelectedMessage = function(){
    return selectedMessage;
   };
   domHandler.setSelectedMessage = function(elementId){
    console.log("THIS WAS CALLED");
    selectedMessage = elementId;
   };



return domHandler;
})(Chatty  || {});
