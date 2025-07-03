const hamburgerElement = document.querySelector(".navigator-hamburger-wrapper");

const navigatorElement = document.querySelector(".header-navigator");

hamburgerElement.addEventListener("click", (e) => {
    e.preventDefault();

    navigatorElement.style.display = (navigatorElement.style.display == "flex") ? "none" : "flex";

});