console.log("Welcome To Code Simply");

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / 80);

        count += increment;

        if (count >= target) {

            counter.innerText = target + "+";

        } else {

            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        }

    };

    updateCounter();

});

// ==========================
// Dark Mode
// ==========================

const darkBtn = document.getElementById("darkMode");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

console.log("Home Page Loaded");