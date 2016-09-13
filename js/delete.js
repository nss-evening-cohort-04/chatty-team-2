var Chatty = (function(deleteMessage){


  //  remove message
   deleteMessage.removeMessage = function(id) {
    var messages = Chatty.getDefaultMessages();
      var selectedIndex = messages.findIndex(function(message){
        return message.id === id;
      });
      messages.splice(selectedIndex, 1);

   };

return deleteMessage;
})(Chatty  || {});
