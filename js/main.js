var fontChange;
var backChange;
var changeTheme = document.getElementById('change-theme');
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
changeTheme.addEventListener("change", function() {
    isChecked(this);
})

document.getElementById("save-changes").addEventListener("click", function() {
document.body.style.color = fontChange;
document.body.style.backgroundColor = backChange;
changeTheme.checked = false;
$('#myModal').modal("hide");


})
document.getElementById("picker-font").addEventListener("change", function() {
 fontChange = this.value;
})
document.getElementById("picker").addEventListener("change", function() {
 backChange = this.value;
})

function isChecked(input) {
    var bodyDiv = document.body;
    console.log(bodyDiv);
    if(input.id === "change-theme" && input.checked) {
        $('#myModal').modal("show");
    }
}