document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('quizForm');
    const nextButton = document.getElementById('nextButton');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', (event) => {
        if (!submitButton) {
            event.preventDefault(); // Prevent form submission if it's the 'Next Question' button
        }
    });

    document.querySelectorAll('input[name="answer"]').forEach((input) => {
        input.addEventListener('change', () => {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                const selectedValue = selectedAnswer.value.trim();
                const allOptions = document.querySelectorAll('input[name="answer"]');

                allOptions.forEach(option => {
                    const parentLabel = option.parentElement;

                    if (option.getAttribute('data-correct-answer') === 'true') {
                        parentLabel.style.color = 'green'; // Correct answer
                    } else if (option.checked) {
                        parentLabel.style.color = 'red'; // Incorrect selected answer
                    } else {
                        parentLabel.style.color = 'inherit'; // Reset other options
                    }
                });

                // Show the 'Next Question' button or 'Submit' button
                if (submitButton) {
                    submitButton.style.display = 'block';
                } else {
                    nextButton.style.display = 'block';
                }
            }
        });
    });

    nextButton.addEventListener('click', () => {
        form.submit(); // Submit the form when the Next Question button is clicked
    });
});
