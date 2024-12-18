// JavaScript for Travel Website

// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
document.querySelector('.hero-form form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const packageOption = this.querySelector('select').value;

    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (packageOption === 'Select Package') {
        alert('Please select a package.');
        return;
    }

    alert(`Thank you, ${name}! Your inquiry about the ${packageOption} package has been sent.`);
    this.reset(); // Reset the form after submission
});
