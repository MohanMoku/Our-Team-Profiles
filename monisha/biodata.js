document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect to skill tags dynamically
    const skillTags = document.querySelectorAll(".skills .skill-tags span");

    skillTags.forEach((tag) => {
        tag.addEventListener("mouseenter", () => {
            tag.style.backgroundColor = "#d94c3a";
        });

        tag.addEventListener("mouseleave", () => {
            tag.style.backgroundColor = "#ff6f61";
        });
    });

    // Animate sections when they enter the viewport
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, options);

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "all 0.5s ease-out";
        observer.observe(section);
    });

    // Add current date to the footer
    const footer = document.createElement("footer");
    const today = new Date();
    footer.textContent = `© ${today.getFullYear()} Monisha Aradhya CM. All Rights Reserved.`;
    document.querySelector(".container").appendChild(footer);
});
