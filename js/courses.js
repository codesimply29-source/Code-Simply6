// Courses Page

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {

        button.textContent = "🚀 ابدأ الآن";

        button.href = button.dataset.redirect;

        button.style.background = "#28a745";
        button.style.color = "#fff";

    });

});