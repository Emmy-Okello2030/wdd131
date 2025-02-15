// Update footer with current year
document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Membership form submission
const membershipForm = document.getElementById('membership-form');
if (membershipForm) {
    membershipForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const experience = document.getElementById('experience').value;
        const features = Array.from(document.querySelectorAll('input[name="features"]:checked'))
                             .map(checkbox => checkbox.value);
        const comments = document.getElementById('comments').value.trim();

        // Validate required fields
        if (!fullName || !email || !phone || !experience) {
            alert('Please fill out all required fields.');
            return;
        }

        // Store form data in localStorage (if available)
        if (typeof Storage !== 'undefined') {
            const membershipData = { fullName, email, phone, experience, features, comments };
            localStorage.setItem('membershipData', JSON.stringify(membershipData));
        } else {
            console.warn('Local storage is not supported.');
        }

        // Conditional branching
        let message = 'Membership form submitted successfully!';
        if (experience === 'beginner') {
            message = `Welcome, beginner e-biker! We have plenty of resources to get you started, ${fullName}.`;
        } else if (experience === 'advanced') {
            message = `Welcome, advanced e-biker! Join us for challenging rides and events, ${fullName}.`;
        }

        alert(message);
        console.log('Membership Data:', { fullName, email, phone, experience, features, comments });

        // Clear form fields
        membershipForm.reset();
    });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        // Store form data in localStorage (if available)
        if (typeof Storage !== 'undefined') {
            const contactData = { name, email, message };
            localStorage.setItem('contactData', JSON.stringify(contactData));
        } else {
            console.warn('Local storage is not supported.');
        }

        alert(`Thank you, ${name}! Your message has been submitted successfully.`);
        console.log('Contact Data:', { name, email, message });

        // Clear form fields
        contactForm.reset();
    });
}
