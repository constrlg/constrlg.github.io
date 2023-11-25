const hamburger_menu_btn = document.querySelector(".hamburger_menu_btn");
const nav = document.querySelector(".nav");
const nav_menu = document.querySelector(".nav_menu");
const nav_menu_2 = document.querySelectorAll(".nav_menu");
const scroll_to_top_btn = document.querySelector(".scroll_to_top_btn");

window.addEventListener("scroll", () => {
    nav.classList.toggle("nav_active", scrollY > 0);
    scroll_to_top_btn.classList.toggle("scroll_to_top_btn_active", scrollY > 300)
});

window.addEventListener("resize", () => {
    if (innerWidth > 768) {
        nav_menu.classList.remove("nav_menu_active");
        hamburger_menu_btn.classList.remove("hamburger_menu_btn_active");
    }
});

hamburger_menu_btn.addEventListener("click", () => {
    nav_menu.classList.toggle("nav_menu_active");
    hamburger_menu_btn.classList.toggle("hamburger_menu_btn_active");
});

nav_menu_2.forEach(n => n.addEventListener("click", () => {
    nav_menu.classList.remove("nav_menu_active");
    hamburger_menu_btn.classList.remove("hamburger_menu_btn_active");
}));

// scroll_to_top_btn.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0
//     });
// });

