Chatty.loadXhr();
// eventlistener for new message
document.getElementById("new-message").addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    if (e.target.value === "") {
      alert("message required");
      return;
    }
    if (Chatty.getSelectedMessage() !== null) {
      Chatty.updateMessage(Chatty.getSelectedMessage(), e.target.value);
      Chatty.setSelectedMessage(null);
    } else {
      Chatty.addMessage(Chatty.getCounterId(), e.target.value);
      Chatty.setCounterId();
    }
    Chatty.loadMessages();
    e.target.value = "";
  }
});
// eventListener for clearMessages
document.getElementById("clear-messages").addEventListener("click", function () {
  // clear all messages from the dom
  document.getElementById("chatty-messages").innerHTML = "";
  Chatty.clearMessages();
});

// eventListener for dark theme
document.getElementById('change-theme').addEventListener("click", function () {
  document.getElementById('picker').value = colorToHex(window.getComputedStyle(document.body, null).backgroundColor);
  document.getElementById('picker-font').value = colorToHex(window.getComputedStyle(document.body, null).color);
  $('#myModal').modal("show");
});

document.getElementById("cancel-theme").addEventListener("click", function () {
  $('#myModal').modal("hide");
  document.getElementById('picker').value = colorToHex(window.getComputedStyle(document.body, null).backgroundColor);
  document.getElementById('picker-font').value = colorToHex(window.getComputedStyle(document.body, null).color);
});

document.getElementById("save-changes").addEventListener("click", function () {
  document.body.style.color = document.getElementById("picker-font").value;
  document.body.style.backgroundColor = document.getElementById("picker").value;
  if (document.getElementById("large-text").checked) {
    document.body.classList.add("large-text");
  } else {
    document.body.classList.remove("large-text");
  }
  $('#myModal').modal("hide");
});

// User object
var users = {
  names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
};

document.getElementById('select-user').innerHTML = users.names.map((name, i) => {
  return (i < 1) ? `
                  <label class="radio-inline">
                    <input type="radio" name="users" id="users" value=${name} checked>
                    ${name}
                  </label>` :
    `<label class="radio-inline">
                    <input type="radio" name="users" id="users" value=${name}>
                    ${name}
                  </label>
                `;
}).join("");

$('input[name="users"]').on('click change', function (e) {
  Chatty.loadMessages();
});

function colorToHex(color) {
  if (color.substr(0, 1) === '#') {
    return color;
  }
  var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

  var red = parseInt(digits[2]);
  var green = parseInt(digits[3]);
  var blue = parseInt(digits[4]);

  var rgb = blue | (green << 8) | (red << 16);
  return digits[1] + '#' + rgb.toString(16);
};
