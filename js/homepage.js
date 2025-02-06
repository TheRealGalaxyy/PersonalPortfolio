document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const underline = document.querySelector(".underline");
    const allContainers = document.querySelectorAll(".container"); // Récupère toutes les sections de contenu

    // Ajouter l'événement au clic sur chaque lien de section
    sections.forEach((section, index) => {
        section.addEventListener("click", () => {
            // Masquer toutes les sections
            allContainers.forEach(container => {
                container.classList.add("hidden"); // Ajouter la classe "hidden" pour toutes les sections
            });

            // Afficher la section correspondante au lien cliqué
            const sectionId = section.getAttribute("data-index");
            const targetSection = document.querySelector(`#${sectionId}`);
            targetSection.classList.remove("hidden"); // Enlever la classe "hidden" de la section sélectionnée

            // Déplacer la barre sous la section sélectionnée
            const sectionRect = section.getBoundingClientRect();
            const footerRect = document.querySelector("footer").getBoundingClientRect();
            underline.style.transform = `translateX(${sectionRect.left - footerRect.left}px)`;
            underline.style.width = `${sectionRect.width}px`;
        });
    });

    // Afficher la première section au démarrage
    const firstSectionRect = sections[0].getBoundingClientRect();
    const footerRect = document.querySelector("footer").getBoundingClientRect();
    underline.style.transform = `translateX(${firstSectionRect.left - footerRect.left}px)`;
    underline.style.width = `${firstSectionRect.width}px`;

    // Afficher la première section par défaut au démarrage
    allContainers.forEach((container, index) => {
        if (index !== 0) container.classList.add("hidden"); // Masquer toutes les sections sauf la première
    });
});
