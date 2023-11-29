// cheesify.js

// Image replacement script
function cheesify() {
  document.querySelectorAll("img").forEach((img) => {
    img.src = `https://source.unsplash.com/collection/8884129/${img.width}x${
      img.height
    }?${Math.random()}`;
    img.srcset = img.src;
  });
}

// Event listener that triggers action from popup.js in the tab
// Listening for messages on the content page using chrome.runtime.onMessage
// request : calling action in popup.js file
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "cheesify") cheesify();
});
