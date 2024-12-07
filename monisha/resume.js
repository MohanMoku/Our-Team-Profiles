// Highlight Active Section on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
    const observerOptions = {
        threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                document
                    .querySelector(`.sidebar a[href="#${id}"]`)
                    .classList.add("active");
            } else {
                document
                    .querySelector(`.sidebar a[href="#${id}"]`)
                    .classList.remove("active");
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});

// Smooth Scroll
const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Add Dynamic Greeting
document.addEventListener("DOMContentLoaded", () => {
    const nameHeading = document.querySelector("h1#name");
    const currentHour = new Date().getHours();
    let greeting = "Hello";

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    nameHeading.insertAdjacentHTML("afterend", `<p>${greeting}, welcome to my resume!</p>`);
});
