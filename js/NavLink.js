import {dataNavLink} from "./data.js";

const handleCreateNavLink = (id) => {
    // lay ra listNavLink item co id tuong ung
    const navLink = dataNavLink.filter((value) => value.id === id);
    // create element ul, h3, button
    const navLinkElement = document.createElement("ul");
    navLinkElement.className = "navbar__nav__nav-link";
    const navLinkTitle = document.createElement("h3");
    navLinkTitle.className = "navbar__nav__nav-link__title";
    const btnClose = document.createElement("button");
    btnClose.className = "navbar__nav__nav-link__btn--close-nav";
    const iconClose = document.createElement("img");
    iconClose.src = "./img/Icon/close-icon.jpg";
    btnClose.appendChild(iconClose);
    navLinkTitle.innerText = navLink[0].title;
    // create array element "li" and "a"
    const navLinkChild = navLink[0].link.map((item) => {
        const navLinkItem = document.createElement("li");
        navLinkItem.className = "navbar__nav__nav-link__nav-link-item";
        const link = document.createElement("a");
        link.innerHTML = item.titleLink;
        navLinkItem.appendChild(link);
        return navLinkItem;
    });
    // append cac the li vao the ul
    navLinkElement.appendChild(btnClose);
    navLinkElement.appendChild(navLinkTitle);
    navLinkChild.forEach((item) => navLinkElement.appendChild(item));
    return navLinkElement;
}
const handleLinkNav = (id) => {
    const navLink = document.querySelectorAll('.navbar__nav__nav-link');
    const navbarNavItem = document.querySelectorAll(".navbar__nav__item");
    navbarNavItem.forEach((item) => item.children[0].style.color = "#fff");
    navbarNavItem[id - 1].children[0].style.color = "#ed0000";
    const navbarNav = document.querySelector(".navbar__nav");
    if (navLink.length === 0) {
        const navLinkNew = handleCreateNavLink(id);
        navbarNav.appendChild(navLinkNew);
        const btnCloseNav = document.querySelector(".navbar__nav__nav-link__btn--close-nav");
        btnCloseNav.addEventListener("click", function() {
            navLinkNew.remove();
            navbarNavItem.forEach((item) => item.children[0].style.color = "#fff");
        })
    }
    else {
        navLink[0].remove();
        const navLinkNew = handleCreateNavLink(id);
        navbarNav.appendChild(navLinkNew);
        const btnCloseNav = document.querySelector(".navbar__nav__nav-link__btn--close-nav");
        btnCloseNav.addEventListener("click", function() {
            navLinkNew.remove();
            navbarNavItem.forEach((item) => item.children[0].style.color = "#fff");
        })
    }
}
const handleCreateNavItem = () => {
    dataNavLink.map((item, index) => {
        const navbarNavItem = document.querySelectorAll(".navbar__nav__item")[index];
        const btnNavItem = document.createElement("button");
        btnNavItem.innerText = item.title;
        btnNavItem.addEventListener("click", () => {
            handleLinkNav(item.id);
        });
        navbarNavItem.appendChild(btnNavItem)
    })
}
handleCreateNavItem();