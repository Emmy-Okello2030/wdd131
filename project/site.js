
document.getElementById("current-year").textContent = new Date().getFullYear();


document.getElementById("membership-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const experience = document.getElementById("experience").value;
    const comments = document.getElementById("comments").value.trim();

    
    const selectedFeatures = [];
    document.querySelectorAll("input[name='features']:checked").forEach((checkbox) => {
        selectedFeatures.push(checkbox.value);
    });

   
    if (fullName === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return;
    }

    
    alert(`Thank you, ${fullName}! Your membership form has been submitted.`);

   
    document.getElementById("membership-form").reset();
});
