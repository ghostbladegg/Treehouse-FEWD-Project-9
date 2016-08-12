// navigation variables
var navBtn = document.querySelectorAll("#main-nav a");
var dashboardBtn = document.getElementById("dashboard-btn");
var membersBtn = document.getElementById("members-btn");
var visitsBtn = document.getElementById("visits-btn");
var settingsBtn = document.getElementById("settings-btn");

// make function for loop to find nav-active
function toggleNavBtn() {
  // make for loop
  for(var i=0; i<navBtn.length; i++) {
  // remove class
    navBtn[i].classList.remove("nav-active");
  }
  this.classList.add("nav-active");
  // add class
}

// event listener for navigation
dashboardBtn.addEventListener("click", toggleNavBtn);
membersBtn.addEventListener("click", toggleNavBtn);
visitsBtn.addEventListener("click", toggleNavBtn);
settingsBtn.addEventListener("click", toggleNavBtn);
