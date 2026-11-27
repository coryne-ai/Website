// Welcome message
window.addEventListener("load", function () {
    alert("Welcome to Hope Children's Home ❤️");
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const section = document.querySelector(this.getAttribute("href"));

        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Donation button
const donateButton = document.getElementById("donateBtn");

if (donateButton) {
    donateButton.addEventListener("click", function () {
        alert("Thank you for supporting Hope Children's Home! ❤️");
    });
}

// Contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you for contacting us! We will get back to you soon.");

        contactForm.reset();
    });
}