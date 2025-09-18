
// Open/Close PopUps
function openPopUp(popUpName){
    document.querySelector(`.popUp.${popUpName}`).classList.add("active");
    setTimeout(() => {
        document.querySelector(`.popUp.${popUpName}`).classList.add("show");
    },1);
    setTimeout(() => {
        document.querySelector(`.popUp.${popUpName} .box`).classList.add("show");
    },200);
}
function closePopUp(popUpName){
    document.querySelector(`.popUp.${popUpName} .box`).classList.remove("show");
    setTimeout(() => {
        document.querySelector(`.popUp.${popUpName}`).classList.remove("show");
    },400);
    setTimeout(() => {
        document.querySelector(`.popUp.${popUpName}`).classList.remove("active");
    },800);
}

// Change active
function changeActive(that){
    that.parentElement.querySelector(".active").classList.remove("active");
    that.classList.add("active");
}

// Change active in navLinks while scrolling // Add/Remove hide to navbar
function navScrollingFun(){
    let sectionsName = ["Home","About","OurStory","SpecialDish","Menu","OurChefs","Contact"],
        currentScroll = window.scrollY;
    for(let sectionName of sectionsName){
        let section = document.querySelector(`#${sectionName}`);
        if (window.scrollY >= section.offsetTop){
            document.querySelector("nav ul li.active").classList.remove("active");
            document.querySelector(".popUp .box .links ul li.active").classList.remove("active");
            document.querySelector(`nav ul li[data-section-id="${section.id}"]`).classList.add("active");
            document.querySelector(`.popUp .box .links ul li[data-section-id="${section.id}"]`).classList.add("active");
        }
    }
    if(window.scrollY >= 50){
        navEle.classList.add("scrolled");
    }
    else{
        navEle.classList.remove("scrolled");
    }
    if(window.scrollY > lastScroll){
        navEle.classList.add("hide");
    }
    else{
        navEle.classList.remove("hide");
    }
    lastScroll = currentScroll;
}

// Change content in menuItem PopUp
function updateContent(icon){
    let currentImg = icon.parentElement.parentElement.querySelector(".img"),
        currentImgSrc = getComputedStyle(currentImg).backgroundImage.slice(5,-2).split("/"),
        currentName = icon.parentElement.parentElement.parentElement.parentElement.querySelector(".item2 .head h5:nth-of-type(1)"),
        currentPrice = icon.parentElement.parentElement.parentElement.parentElement.querySelector(".item2 .head h5:nth-of-type(2)");
    popUpImgSrc[popUpImgSrc.length - 1] = currentImgSrc[currentImgSrc.length - 1]; 
    popUpImg.src = popUpImgSrc.join("/");
    popUpName.textContent = currentName.textContent;
    popUpPrice.textContent = currentPrice.textContent;
}