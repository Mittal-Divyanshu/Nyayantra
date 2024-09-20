let slideIndex = 0;
showSlides(); // Initial call to start the slideshow

// Function to show slides automatically
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides initially
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    // Reset the slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;  // Loop back to the first slide
    }
    
    // Make the current slide visible
    slides[slideIndex - 1].style.display = "block";  
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Add the "active" class to the current dot
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }

    // Change slide every 10 seconds (10000 ms)
    setTimeout(showSlides, 10000);  
}

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.querySelector('.profile-section img');
    const profileMenu = document.querySelector('.profile-menu');

    // Function to toggle the profile menu visibility
    function toggleProfileMenu(event) {
        event.preventDefault();
        // Toggle the "active" class on the profile menu
        profileMenu.classList.toggle('active');
    }

    // Function to hide the profile menu if clicking outside of it
    function handleClickOutside(event) {
        if (!profileMenu.contains(event.target) && event.target !== profileIcon) {
            profileMenu.classList.remove('active');
        }
    }

    // Add click event listener to the profile icon
    profileIcon.addEventListener('click', toggleProfileMenu);

    // Add click event listener to the document to detect clicks outside the profile menu
    document.addEventListener('click', handleClickOutside);
});