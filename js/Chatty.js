var Chatty = (function() {

  // Private variable to store messages in
  var currentMessages = [];
  counterId = 6;

  // Return the public interface that other code can interact with
  return {
            loadXhr: function() {
                var messageRequest = new XMLHttpRequest();
                messageRequest.addEventListener("load", function() {
                    var data = JSON.parse(this.responseText);
                    currentMessages = data.messages;
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
            // method to get and set the counterID.....
  };
})();
Chatty.loadXhr();

