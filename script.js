const hamburgerButton = document.querySelector(".navigation__hamburger-button");
const closeButton = document.querySelector(".menu__button-close")
const menu = document.querySelector(".menu");
const allDivs = document.querySelectorAll("div:not(.menu)");
console.log(allDivs)


hamburgerButton.addEventListener('click', (e)=>{
    menu.classList.toggle("display");
    menu.classList.toggle("animation-fade__slow");
    for(var i=0; i<allDivs.length; i++){
        allDivs[i].classList.toggle("displayOff");
    }
})

closeButton.addEventListener('click', (e)=>{
    menu.classList.toggle("display");
    menu.classList.toggle("animation-fade__slow");
    for(var i=0; i<allDivs.length; i++){
        allDivs[i].classList.toggle("displayOff");
    }
})