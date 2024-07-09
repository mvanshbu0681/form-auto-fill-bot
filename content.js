(function() {
  console.log("Content script loaded for Google Forms");

  const answers = {
    "What is the capital of France?": "France",
    "What is 2 + 2?": "4",
    // Add more questions and answers as needed
  };

  function autoSelectAnswers(answers) {
    debugger;
    console.log("Start of Auto-selecting answers");
    let questions = document.querySelectorAll('[role="listitem"]');
    console.log(`Found ${questions.length} questions for auto-selection`);

    questions.forEach((question, index) => {
      debugger;
      let questionTitleElement = question.querySelector('div[role="heading"]');
      if (questionTitleElement) {
        let questionText = questionTitleElement.textContent.trim();
        console.log(`Question ${index + 1}: ${questionText}`);
        
        let normalizedQuestionText = questionText.replace(/\s*\*$/, '');
        let answer = answers[normalizedQuestionText];
        
        if (answer) {
          debugger;
          let optionsContainer = question.querySelector('[role="radiogroup"]');
          console.log(`Answer for question ${index + 1}: ${answer}`);
          if (optionsContainer) {
            debugger;
            let options = optionsContainer.querySelectorAll('[role="radio"]');
            console.log(`Found ${options.length} options for question ${index + 1}`);
            options.forEach(option => {
              let optionText = option.getAttribute('aria-label').trim();
              if (optionText === answer) {
                debugger;
                option.click();
                console.log(`Answer "${answer}" selected for question ${index + 1}`);
              }
            });
          } else {
            console.log(`Options container not found for question ${index + 1}`);
          }
        } else {
          console.log(`No predefined answer found for question ${index + 1}`);
        }
      } else {
        console.log(`Question title element not found for question ${index + 1}`);
      }
    });
  }

  autoSelectAnswers(answers);
})();
