const menubtn = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');

menubtn.onclick = function () {
    if (menuList.style.display !== "none") {
    menuList.style.display = "none";
    } else {
    menuList.style.display = "block";
    }
};