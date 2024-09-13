// Function to search for words in the dictionary
function searchWord() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const dictionaryContainer = document.getElementById("dictionaryContainer");
    const dictionaryItems = dictionaryContainer.getElementsByTagName("li");

    // Loop through all dictionary items and hide those that don't match the search term
    for (let i = 0; i < dictionaryItems.length; i++) {
        const itemText = dictionaryItems[i].innerText.toLowerCase();
        if (itemText.includes(searchTerm)) {
            dictionaryItems[i].style.display = "block"; // Show matching items
        } else {
            dictionaryItems[i].style.display = "none"; // Hide non-matching items
        }
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}