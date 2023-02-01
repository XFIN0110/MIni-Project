let open = false;

document.querySelector("#menu-btn").addEventListener("click", () => {
    const sidebar = document.querySelector(".sidenav")
    if (!open) {
        sidebar.classList.add("show");
    } else {
        sidebar.classList.remove("show");
    }
})