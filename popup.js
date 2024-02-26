// Base URL ---
const urlInput = document.getElementById('urlInput');

chrome.storage.local.get(response =>{
    if (chrome.runtime.lastError) {
        // error
    } else {
        // Access the retrieved URL (if it exists)
        const savedUrl = response.url;
        urlInput.value = savedUrl ? savedUrl : '';
    }
});

urlInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    chrome.storage.local.set({ url: urlInput.value });
  }
})

// Stories ---
const storyInput = document.getElementById("storyInput");

storyInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    const value = storyInput.value;
    chrome.tabs.create({ url: targetUrl + '/browse/' + value });
  }
})
