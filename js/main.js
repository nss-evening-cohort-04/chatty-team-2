Chatty.loadXhr();
// eventlistener for new message
document.getElementById("new-message").addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        // get id from Chatty.js
      var messagesLength = Chatty.getMessages();
      Chatty.addMessage(Chatty.getCounterId(), e.target.value);
      Chatty.setCounterId();
      Chatty.loadMessages();
      e.target.value = "";
    }
});

// eventListener for clearMessages
document.getElementById("clear-messages").addEventListener("click", function() {
    // clear all messages from the dom
    document.getElementById("chatty-messages").innerHTML = "";
    Chatty.clearMessages();
})

// eventListener for dark theme
document.getElementById("dark-theme").addEventListener("change", function() {
    isChecked(this);
})

// eventListener for large text
document.getElementById("large-text").addEventListener("change", function() {
    isChecked(this);
})

function isChecked(input) {
    var bodyDiv = document.body;
    console.log(bodyDiv);
    if(input.id === "dark-theme" && input.checked) {
        bodyDiv.classList.add("dark-theme");
    } else if (input.id === "dark-theme" && input.checked != "true") {
        bodyDiv.classList.remove("dark-theme");
    } else if(input.id === "large-text" && input.checked) {
        bodyDiv.classList.add("large-text");
    } else if (input.id === "large-text" && input.checked != "true") {
        bodyDiv.classList.remove("large-text");
    }
}

