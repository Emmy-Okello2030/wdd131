document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');

    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        dateElement.textContent = `Date: ${date}`;
        timeElement.textContent = `Time: ${time}`;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
