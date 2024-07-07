chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getAnswer") {
      fetch('YOUR_CHATGPT_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`
        },
        body: JSON.stringify({ question: request.question })
      })
      .then(response => response.json())
      .then(data => sendResponse({ answer: data.answer }))
      .catch(error => sendResponse({ error: error.toString() }));
      return true; // Indicates that the response will be sent asynchronously
    }
  });
  