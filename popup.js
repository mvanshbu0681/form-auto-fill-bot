// popup.js

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');

  startButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      }, () => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
        } else {
          console.log("Content script executed successfully");
        }
      });
    });
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
  });
});
