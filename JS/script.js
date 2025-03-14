document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const profileImage = document.querySelector(".profile-image");

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        themeToggle.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
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