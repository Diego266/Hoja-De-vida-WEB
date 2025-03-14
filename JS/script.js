document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const profileImage = document.querySelector(".profile-image");

    // Crear función para mostrar el modal
    function showModal() {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
            <div class="modal-content">
                <p>¿Realmente deseas cambiar el color del tema?</p>
                <button class="modal-button" data-action="yes">Sí</button>
                <button class="modal-button" data-action="no">No</button>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener("click", (event) => {
            if (event.target.dataset.action === "yes") {
                body.classList.toggle("dark-mode");
                themeToggle.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
            }
            if (event.target.dataset.action) {
                document.body.removeChild(modal);
            }
        });

        modal.style.display = "flex";
    }

    themeToggle.addEventListener("click", showModal);

    // Activar el primer contenido de pestaña por defecto
    tabContents[0].classList.add("active");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");

            tabContents.forEach(content => content.classList.remove("active"));
            document.getElementById(tab).classList.add("active");

            tabButtons.forEach(btn => btn.classList.remove("active-tab"));
            this.classList.add("active-tab");
        });
    });

    // Añadir desplazamiento suave a los botones de navegación
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ampliar imagen de perfil al hacer clic
    profileImage.addEventListener("click", function() {
        const imageOverlay = document.createElement("div");
        Object.assign(imageOverlay.style, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "zoom-out",
            zIndex: 1000
        });

        const imageClone = this.cloneNode();
        Object.assign(imageClone.style, {
            width: "50%",
            height: "auto",
            border: "none"
        });

        imageOverlay.appendChild(imageClone);
        document.body.appendChild(imageOverlay);

        imageOverlay.addEventListener("click", () => {
            document.body.removeChild(imageOverlay);
        });
    });
});


