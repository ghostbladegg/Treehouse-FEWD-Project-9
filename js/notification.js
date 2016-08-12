var bell = document.getElementById("bell");
var notificationContainer = document.getElementById("notification-container");

function bellClick() {
  bell.classList.remove("bell-notification");
  if (window.getComputedStyle(notificationContainer).getPropertyValue("display") === "none") {
    notificationContainer.style.display = "initial";
  } else {
    notificationContainer.style.display = "none";
  }
}

bell.addEventListener("click", bellClick);
