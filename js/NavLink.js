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
const handleDisplayNavLink = (id) => {
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
const handleDisplayNavigation = () => {
    const navbarNav = document.querySelector(".navbar__nav");
    const iconMenu = document.querySelector(".navbar__btn--display-nav").children[0];
    navbarNav.classList.toggle("display");
    switch (navbarNav.classList.length) {
        case 1:
            iconMenu.className = "fa fa-bars"
            break;
        case 2:
            iconMenu.className = "fa fa-close"
            break;
        default:
            break;
    }
}
const btnDisplayNav = document.querySelector(".navbar__btn--display-nav");
btnDisplayNav.addEventListener("click", () => handleDisplayNavigation())
const handleCreateNavItem = () => {
    dataNavLink.map((item, index) => {
        const navbarNavItem = document.querySelectorAll(".navbar__nav__item")[index];
        const btnNavItem = document.createElement("button");
        btnNavItem.innerText = item.title;
        btnNavItem.addEventListener("click", () => {
            handleDisplayNavLink(item.id);
        });
        navbarNavItem.appendChild(btnNavItem)
    })
}
const handleQueryNavbar = (x) => {
    const navbarNav = document.querySelector(".navbar__nav");
    if (x.matches) {
        navbarNav.style.left = "";
        navbarNav.lastChild.remove();
        navbarNav.childNodes.forEach((item) => {
            item.childNodes.forEach((item) => {
                item.style.color ="#fff"
            })
        })
    }
    else {
        navbarNav.style.left = "auto";
        navbarNav.className = "navbar__nav";
        const iconMenu = document.querySelector(".navbar__btn--display-nav").children[0];
        iconMenu.className = "fa fa-bars"
    }
}
let x = window.matchMedia("(max-width: 1088px)");
handleQueryNavbar(x);
x.addListener(handleQueryNavbar);
handleCreateNavItem();