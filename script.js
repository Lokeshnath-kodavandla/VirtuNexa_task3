document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggle");
    const body = document.body;

    // Check if dark mode preference is saved in localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    // Toggle dark mode on checkbox change
    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
