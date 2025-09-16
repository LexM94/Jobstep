  const currentPage = window.location.pathname.split("/").pop();

    // Sélectionne tous les liens de la navbar
    document.querySelectorAll(".nav-links a").forEach(link => {
        // Si le href du lien correspond au fichier courant → on ajoute .active
        if(link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });