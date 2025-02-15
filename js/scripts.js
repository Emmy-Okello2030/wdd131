document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "product1", name: "Product 1" },
        { id: "product2", name: "Product 2" },
        { id: "product3", name: "Product 3" }
    ];

    const productNameSelect = document.getElementById("productName");
    const reviewCountElement = document.getElementById("reviewCount");

    // Ensure the dropdown exists before proceeding
    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    } else {
        console.warn("Dropdown element with ID 'productName' not found.");
    }

    // Check if the script is running on 'review.html'
    if (window.location.pathname.includes("review.html") && reviewCountElement) {
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
        reviewCountElement.textContent = `Reviews Completed: ${reviewCount}`;
    } else if (!reviewCountElement) {
        console.warn("Element with ID 'reviewCount' not found.");
    }
});
