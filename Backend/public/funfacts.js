const facts = [
    "India, the largest democracy, stands proud with the lengthiest Constitution in the world comprising 448 Articles in 25 Parts and 12 Schedules",
   "Samvidhan divas is celebrated on 26th November 1949.On 26 November 1949, the Constituent Assembly of India adopted to the Constitution of India, and it came into effect on 26 January 1950.",
  
   "The Constitution of India, which is the longest written constitution of any country in the world, was handwritten in Hindi and English rather than being printed or typed. The document was written by Prem Behari Narain Raizada in a calligraphy font.",
   "The directive principles have been taken from the Irish Constitution, our Parliamentary type of Government with a cabinet system that is accountable to the lower house is an idea that the makers borrowed from the British Parliamentary system." ,
   "The Supreme Court, our Fundamental Rights, and the role of the Vice-President were suggested by the Constitution of the United States of America. Emergency provisions were picked from the German Constitution, and the French Constitution influenced the concepts of liberty, fraternity and equality. The Japanese Constitution influenced the principles about the functioning of the Supreme Court.",
   "The Constitution of India has been amended over 106 times."
];



let factIndex = 0;
let charIndex = 0;
const speed = 100; // typing speed in milliseconds
const factElement = document.getElementById('fact');

function typeFact() {
    if (charIndex < facts[factIndex].length) {
        factElement.innerHTML += facts[factIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeFact, speed);
    } else {
        // Move to the next fact after a delay
        setTimeout(() => {
            factIndex++;
            if (factIndex < facts.length) {
                charIndex = 0;
                factElement.innerHTML = ''; // Clear the previous fact
                typeFact();
            }
        }, 2000); // 2-second pause before typing the next fact
    }
}

// Start typing the first fact when the page loads
window.onload = typeFact;
