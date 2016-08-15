var messageUser = document.getElementById("message-user");
var messageContent = document.getElementById("message-content");
var sendButton = document.getElementById("send-button");
var sendConfirmation = document.getElementById("send-confirmation");
var noUser = document.getElementById("no-data-user");
var noContent = document.getElementById("no-data-content");
var noUserAnchor = document.querySelector("#no-data-user a");
var noContentAnchor = document.querySelector("#no-data-content a");
var sendConfirmationAnchor = document.querySelector("#send-confirmation a");

function alertClose(close) {
  close.style.display = "none";
}

function emptyCheck() {
  noUser.style.display = "none";
  noContent.style.display = "none";
  sendConfirmation.style.display = "none";
  if ( messageUser.value === "" && messageContent.value === "" ) {
    noUser.style.display = "flex";
    noContent.style.display = "flex";
  } else if ( messageUser.value === "" ) {
    noUser.style.display = "flex";
  } else if ( messageContent.value === "" ) {
    noContent.style.display = "flex";
  } else {
    sendConfirmation.style.display = "flex";
    messageUser.value = "";
    messageContent.value = "";
  }
}

sendButton.addEventListener("click", emptyCheck);
noUserAnchor.addEventListener("click", function() {
  alertClose(noUser);
});
noContentAnchor.addEventListener("click", function() {
  alertClose(noContent);
});
sendConfirmationAnchor.addEventListener("click", function() {
  alertClose(sendConfirmation);
});
