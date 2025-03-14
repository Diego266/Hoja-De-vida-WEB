document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const profileImage = document.querySelector(".profile-image");

    // Crear el modal de confirmación
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <p>¿Realmente deseas cambiar el color del tema?</p>
            <button class="modal-button" id="confirm-yes">Sí</button>
            <button class="modal-button" id="confirm-no">No</button>
        </div>
    `;
    document.body.appendChild(modal);

    themeToggle.addEventListener("click", function() {
        // Mostrar el modal
        modal.style.display = "flex";
    });

    document.getElementById("confirm-yes").addEventListener("click", function() {
        // Cambiar el tema y cerrar el modal
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
        modal.style.display = "none";
    });

    document.getElementById("confirm-no").addEventListener("click", function() {
        // Solo cerrar el modal
        modal.style.display = "none";
    });

    tabContents[0].classList.add("active");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");

            tabContents.forEach(content => {
                content.classList.remove("active");
            });

            document.getElementById(tab).classList.add("active");

            tabButtons.forEach(btn => btn.classList.remove("active-tab"));
            this.classList.add("active-tab");
        });
    });

    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
        });
    });

    profileImage.addEventListener("click", function() {
        const imageOverlay = document.createElement("div");
        imageOverlay.style.position = "fixed";
        imageOverlay.style.top = "0";
        imageOverlay.style.left = "0";
        imageOverlay.style.width = "100%";
        imageOverlay.style.height = "100%";
        imageOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        imageOverlay.style.display = "flex";
        imageOverlay.style.justifyContent = "center";
        imageOverlay.style.alignItems = "center";
        imageOverlay.style.cursor = "zoom-out";
        imageOverlay.style.zIndex = "1000";

        const imageClone = this.cloneNode();
        imageClone.style.width = "50%";
        imageClone.style.height = "auto";
        imageClone.style.border = "none";

        imageOverlay.appendChild(imageClone);
        document.body.appendChild(imageOverlay);

        imageOverlay.addEventListener("click", function() {
            document.body.removeChild(imageOverlay);
        });
    });
});


