// eventlistener for new message
document.getElementById("new-message").addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        // get id from Chatty.js

    }
});

// eventListener for clearMessages
document.getElementById("clear-messages").addEventListener("click", function() {
    // clear all messages from the dom
    document.getElementById("chatty-messages").innerHTML = "";
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
    if(input.checked) {
        if(input.id === "dark-theme") {
            document.body.className = "dark-theme";
        }
        if(input.id === "large-text") {
            document.body.className = "bigger-font";
        }
    }
}