const sidebar = document.querySelector('aside.siderbar');
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () {
    sidebar.classList.add("action");
});

closeBtn.addEventListener("click", () {
    sidebar.classList.remove("action");
});