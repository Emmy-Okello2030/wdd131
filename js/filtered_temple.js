const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: 106000,
        imageUrl: "images/salt-lake-temple.jpeg"
    },
    {
        name: "Los Angeles Temple",
        location: "Los Angeles, California, USA",
        dedicated: "April 11, 1955",
        area: 22000,
        imageUrl: "images/los-angeles-temple.jpeg"
    },
    {
        name: "London Temple",
        location: "London, England, UK",
        dedicated: "September 7, 1958",
        area: 20400,
        imageUrl: "images/london-temple.jpeg"
    },
    // Add additional temple objects here
    {
        name: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "TBD",
        area: 15000,
        imageUrl: "images/nairobi-kenya-temple.jpeg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "March 10, 2019",
        area: 40000,
        imageUrl: "images/rome-italy-temple.jpeg"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "October 27, 1980",
        area: 52000,
        imageUrl: "images/tokyo-japan-temple.jpeg"
    }
];

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';

    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        <h3>${temple.name}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    return card;
}

function displayTemples(filteredTemples) {
    const container = document.getElementById('temple-cards-container');
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        container.appendChild(card);
    });
}

function filterTemples(criteria) {
    let filteredTemples = temples;
    switch (criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

document.getElementById('home').addEventListener('click', () => filterTemples('home'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

window.addEventListener('DOMContentLoaded', () => {
    filterTemples('home');
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
    document.getElementById('last-modified').textContent = document.lastModified;



    
});