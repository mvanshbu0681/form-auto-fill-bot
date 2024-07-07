document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".freebirdFormviewerComponentsQuestionBaseTitle, .office-form-question-title");
    questions.forEach((question, index) => {
      chrome.runtime.sendMessage({
        action: "getAnswer",
        question: question.innerText
      }, (response) => {
        if (response.answer) {
          // Example logic to fill in the answer
          const inputField = document.querySelector(`input[name='${index + 1}']`);
          if (inputField) {
            inputField.value = response.answer;
          }
        } else {
          console.error(response.error);
        }
      });
    });
  });
  