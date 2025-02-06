
document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".section");
    const underline = document.querySelector(".underline");

    sections.forEach((section, index) => {
        section.addEventListener("click", () => {

            const sectionRect = section.getBoundingClientRect();
            const footerRect = document.querySelector("footer").getBoundingClientRect();
            underline.style.transform = `translateX(${sectionRect.left - footerRect.left}px)`;
            underline.style.width = `${sectionRect.width}px`;
        });
    });

    const firstSectionRect = sections[0].getBoundingClientRect();
    const footerRect = document.querySelector("footer").getBoundingClientRect();
    underline.style.transform = `translateX(${firstSectionRect.left - footerRect.left}px)`;
    underline.style.width = `${firstSectionRect.width}px`;
});

        

