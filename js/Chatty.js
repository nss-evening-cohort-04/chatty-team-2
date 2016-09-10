var Chatty = (function() {

  // Private variable to store messages in
  var currentMessages = [];


  // Return the public interface that other code can interact with
  return {
            loadXhr: function() {
                var messageRequest = new XMLHttpRequest();
                messageRequest.addEventListener("load", function() {
                    currentMessages = JSON.parse(this.responseText);
                });
                messageRequest.addEventListener("error", function() {
                    console.log("There was an error processing the file.");
                });
                messageRequest.open("GET", "messages.json");
                messageRequest.send();
            },
            getMessages: function() {
               return currentMessages;
            }
  };
})();

