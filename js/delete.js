var Chatty = (function(domHandler){

  //  remove message from DOM and array
   domHandler.deleteMessage = function(elementId){
    var id = elementId.substring(elementId.length - 8);
      Chatty.removeMessage(id);
      Chatty.removeEl(elementId);
   };

   domHandler.removeEl = function(id){
    var domElement = document.getElementById(id);
    domElement.parentNode().removeChild(domElement);
   };

return domHandler;
})(Chatty  || {});
