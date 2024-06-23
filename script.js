document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const loginSignupLink = document.getElementById('loginSignupLink');
const modal = document.getElementById('loginSignupModal');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

loginSignupLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    modal.style.visibility = 'visible';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    modal.style.visibility = 'hidden';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
    }
});
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceInput = document.getElementById("service");
    const words = ["Search for services...", "Find a plumber", "Locate a carpenter", "Hire an electrician"];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[currentWordIndex];
        if (isDeleting) {
            serviceInput.placeholder = currentWord.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            serviceInput.placeholder = currentWord.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    type();
});