function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

function setFooterDetails() {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    
    // Set the copyright information
    footerYear.innerHTML = `&copy; ${currentYear} Emily Okello. All rights reserved.`;

    // Get and format the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    footerYear.innerHTML += ` Last modified: ${formattedDate}`;
}

function calculateWindChill() {
    const temperature = 10; // Static temperature value in °C
    const windSpeed = 5; // Static wind speed in km/h

    // Check if conditions for wind chill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1); // Calculate wind chill using the formula
        document.getElementById('wind-chill').textContent = `${windChill}°C`; // Display the wind chill
    } else {
        document.getElementById('wind-chill').textContent = "N/A"; // Display "N/A" if conditions aren't met
    }
}

// Ensure all scripts run after the DOM has loaded
window.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();       // Set the current year in the footer
    setFooterDetails();     // Update footer details (copyright and last modified date)
    calculateWindChill();   // Calculate and display the wind chill
});
