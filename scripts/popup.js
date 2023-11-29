// popup.js

// Selecting the tab where the message will be displayed
function sendCheesifyMsg() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Finds tabs that are active in the current window
    chrome.tabs.sendMessage(tabs[0].id, { action: "cheesify" }); // Get the id of the current tab and Sends a message (object) to the first tab (tabs[0])
  });
}

// Selecting the cheese button
const cheesifyButton = document.querySelector("#cheesify");

// Adding an event listener : clicks trigger sendCheesifyMsg function
cheesifyButton.addEventListener("click", (event) => {
  sendCheesifyMsg();
});
