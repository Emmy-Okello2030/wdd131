function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
}

function setFooterDetails() {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    
  
    footerYear.innerHTML = `&copy; ${currentYear} Emily Okello. All rights reserved.`;

  
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
    const temperature = 10;
    const windSpeed = 5; 
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1); 
        document.getElementById('wind-chill').textContent = `${windChill}°C`; // Display the wind chill
    } else {
        document.getElementById('wind-chill').textContent = "N/A"; // Display "N/A" if conditions aren't met
    }
}


window.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();      
    setFooterDetails();     
    calculateWindChill();   
});
