function sendCheesifyMsg() {
  // TODO: Write a function to send a message to the active tab to 'cheesify' it
}

// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
// Selecting the cheese button
const cheesifyButton = document.querySelector("#cheesify");

// Adding an event listener : when click =>
cheesifyButton.addEventListener("click", (event) => {
  alert("Cheesify button clicked");
});
