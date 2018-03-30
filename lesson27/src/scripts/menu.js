
const menuBtn = document.querySelector(".menu_btn"),
    menu = document.querySelector(".menu"),
    menuList = document.querySelectorAll(".menu_item"),
    submenu = document.querySelectorAll(".submenu");

menuBtn.addEventListener("click", function (e) {
    toggleClass(menu);
});

for (let item of menuList) {
    item.addEventListener("click", function ({ currentTarget: { lastElementChild } }) {
        toggleClass(lastElementChild);
    })
}

document.addEventListener("click", function ({ target }) {
    if (target != menuBtn && target.classList != "menu_item") {
        menu.classList.remove("active");
    }
})

function toggleClass(elem) {
    if (elem.classList.contains("active")) {
        elem.classList.remove("active")
    } else {
        closeSubmenu();
        elem.classList.add("active");
    }
}

function closeSubmenu() {
    for (let item of submenu) {
        item.classList.remove("active");
    }
}