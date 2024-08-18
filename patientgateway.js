function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Validation logic
    let isValid = true;
    const fields = ['name', 'email', 'date', 'department'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            showError(input, `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
        }
    });

    const email = document.getElementById('email');
    if (email.value && !validateEmail(email.value)) {
        isValid = false;
        showError(email, 'Please enter a valid email address.');
    }

    if (isValid) {
        alert('Appointment successfully booked!');
        document.getElementById('appointmentForm').reset();
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    // Clear previous error messages
    let errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());

    // Validation logic
    let isValid = true;
    const fields = ['contact-name', 'contact-email', 'message'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            showError(input, `${field.replace('contact-', '').replace('-', ' ').toUpperCase()} is required.`);
        }
    });

    const email = document.getElementById('contact-email');
    if (email.value && !validateEmail(email.value)) {
        isValid = false;
        showError(email, 'Please enter a valid email address.');
    }

    if (isValid) {
        alert('Message successfully sent!');
        document.getElementById('contactForm').reset();
    }
});

function showError(input, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Additional animations
window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in, .slide-in');
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
});
