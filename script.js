// This script provides interactive functionality for the Foods of Kenya website.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Welcome Alert on the Menu Page
    // Checks if the current page title matches the menu page title.
    if (document.title === 'Our Menu - Foods of Kenya Restaurant') {
        alert('Welcome to our menu! We hope you find something delicious!');
    }

    // 2. Contact Form Submission Handling
    // Selects the form on the contact page.
    const contactForm = document.querySelector('.contact-form form');

    // Checks if the form element exists on the page.
    if (contactForm) {
        // Adds an event listener for the form's submission.
        contactForm.addEventListener('submit', (event) => {
            // Prevents the form from submitting in the traditional way (page reload).
            event.preventDefault();

            // Gets the values entered by the user.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Logs the form data to the browser's console for debugging.
            console.log('Form submission detected:');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            // Provides feedback to the user via an alert.
            alert('Thank you for your message! We will get back to you soon.');

            // Clears all the input fields in the form.
            contactForm.reset();
        });
    }
});