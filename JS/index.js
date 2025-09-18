let carouselPrevBtn = document.querySelector("header .prev"),
    carouselNextBtn = document.querySelector("header .next"),
    indicators = document.querySelectorAll("header .indicators li"),
    popUpBoxes = document.querySelectorAll(".popUp .box"),
    navEle = document.querySelector("nav"),
    lastScroll = 0,
    menuImgIcons = document.querySelectorAll("#Menu .menu .icon"),
    menuRows = document.querySelectorAll("#Menu .menu .menuItem.breakfast .row1"),
    popUp = document.querySelector(".popUp.menuItem"),
    popUpImg = popUp.querySelector(".img img"),
    popUpImgSrc = popUpImg.src.split("/"),
    popUpName = popUp.querySelector(".box h2"),
    popUpPrice = popUp.querySelector(".box .price"),
    popUpNextBtn = popUp.querySelector("button.next"),
    popUpPrevBtn = popUp.querySelector("button.prev"),
    menuNavLinks = document.querySelectorAll("#Menu .menuNav li"),
    currentIndex;

carouselNextBtn.addEventListener("click", () => {
    let currentSlide = document.querySelector("header .carouselItem.active"),
        nextSlide = currentSlide.nextElementSibling ?? document.querySelector("header .carouselItem:nth-of-type(1)"),
        currentIndicator = document.querySelector(`header .indicators li[data-index="${nextSlide.getAttribute("data-index")}"]`);
    currentSlide.classList.remove("active");
    document.querySelector("header .indicators li.active").classList.remove("active");
    nextSlide.classList.add("active");
    currentIndicator.classList.add("active");
});
carouselPrevBtn.addEventListener("click", () => {
    let currentSlide = document.querySelector("header .carouselItem.active"),
        prevSlide = currentSlide.previousElementSibling ?? document.querySelector("header .carouselItem:last-child"),
        currentIndicator = document.querySelector(`header .indicators li[data-index="${prevSlide.getAttribute("data-index")}"]`);
    currentSlide.classList.remove("active");
    document.querySelector("header .indicators li.active").classList.remove("active");
    prevSlide.classList.add("active");
    currentIndicator.classList.add("active");
});
indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
        let currentIndicator = document.querySelector("header .indicators li.active"),
            currentSlide = document.querySelector("header .carouselItem.active"),
            selectedSlide = document.querySelector(`header .carouselItem[data-index="${indicator.getAttribute("data-index")}"]`);
        currentIndicator.classList.remove("active");
        currentSlide.classList.remove("active");
        indicator.classList.add("active");
        selectedSlide.classList.add("active");
    });
});

// Stop propagation on the popUp box
popUpBoxes.forEach((popUpBox)=>{
    popUpBox.addEventListener("click",(e)=>{
        e.stopPropagation();
    });
});

// Loading Page
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".loadingPage").classList.add("hide");
        setTimeout(() => {
        document.querySelector(".loadingPage").classList.add("d-none");
        },1000);
    },4500);
    navScrollingFun();
});

window.addEventListener("scroll", () => {navScrollingFun();});

// MenuItem PopUp
menuImgIcons.forEach((menuImgIcon) => {
    menuImgIcon.addEventListener("click", () => {
        updateContent(menuImgIcon);
        currentIndex = menuImgIcon.getAttribute("data-index");
        openPopUp("menuItem");
    });
});

// Menu Next/Prev Item
popUpNextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex == menuRows.length -1) ? 0 : ++currentIndex;
    let nextIndex = currentIndex,
        currentType = document.querySelector("#Menu .menu .menuItem.active").getAttribute("data-type"),
        currentIcon = document.querySelector(`#Menu .menu .${currentType} .icon[data-index='${nextIndex}']`);
    updateContent(currentIcon);
});
popUpPrevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex == 0) ? menuRows.length -1 : --currentIndex;
    let nextIndex = currentIndex,
        currentType = document.querySelector("#Menu .menu .menuItem.active").getAttribute("data-type"),
        currentIcon = document.querySelector(`#Menu .menu .${currentType} .icon[data-index='${nextIndex}']`);
    updateContent(currentIcon);
});

// Change menu type
menuNavLinks.forEach((menuNavLink) => {
    menuNavLink.addEventListener("click", () => {
        document.querySelector(`#Menu .menu .active`).classList.remove("active" ,"show");
        document.querySelector(`#Menu .menu .${menuNavLink.getAttribute("data-type")}`).classList.add("active");
        setTimeout(() => {
            document.querySelector(`#Menu .menu .${menuNavLink.getAttribute("data-type")}`).classList.add("show");
        },1);
    });
});