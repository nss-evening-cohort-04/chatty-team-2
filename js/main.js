var fontChange;
var backChange;
var changeTheme = document.getElementById('change-theme');
Chatty.loadXhr();
// eventlistener for new message
document.getElementById("new-message").addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
    if (e.target.value === "") {
      alert("message required");
          return;
        }
    if (Chatty.getSelectedMessage() !== null){
      Chatty.updateMessage(Chatty.getSelectedMessage(), e.target.value);
      Chatty.setSelectedMessage(null);
    }
    else {
      Chatty.addMessage(Chatty.getCounterId(), e.target.value);
      Chatty.setCounterId();
    }
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


// User object
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

document.getElementById('select-user').innerHTML = users.names.map((name,i) => {
  return (i<1) ? `<input type="radio" name="users" id="users" value=${name} checked> ${name} </input>` : `<input type="radio" name="users" id="users" value=${name}> ${name} </input>`;
}).join("");