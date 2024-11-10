document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactFormUnique");

    form.addEventListener("submit", function(event) {
        // Check if all required fields are filled
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            event.preventDefault(); // Prevent form from submitting
        } else {
            alert("Thank you for your message! We will get back to you soon.");
        }
    });
});