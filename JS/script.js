document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

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

    document.querySelectorAll("nav button").forEach(button => {
        button.addEventListener("click", function() {
            const tab = this.getAttribute("data-tab");
            document.getElementById(tab).scrollIntoView({ behavior: "smooth" });
        });
    });
});
