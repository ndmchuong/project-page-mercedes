import {dataBanner} from "./data.js";

let indexSlide = 0;
const handleSlideBanner = () => {
    indexSlide += 1;
    if (indexSlide == dataBanner.length) {
        indexSlide = 0;
    }
    
    let bgBanner = document.getElementsByClassName("banner")[0];
    let textModel = document.getElementsByClassName("banner__text--model")[0];
    let textSlogan = document.getElementsByClassName("banner__text--slogan")[0];
    let linkDetail = document.getElementsByClassName("banner__link-product")[0];
    // custom background-image and text
    bgBanner.style.backgroundImage = `${dataBanner[indexSlide].src}`;
    textModel.innerText = `${dataBanner[indexSlide].textModel}`;
    textSlogan.innerText = `${dataBanner[indexSlide].textSlogan}`;
    linkDetail.href = `${dataBanner[indexSlide].href}`;
} 
setInterval(handleSlideBanner, 5000);

// const handleDropdownNav = () => {
//     const iconBar = document.querySelector(".navbar__btn--dropdown-nav").children[0];
//     if (iconBar.className === 'fa fa-bars') {
//         iconBar.className = "fa fa-close";
//     }
//     else if (iconBar.className === "fa fa-close") {
//         iconBar.className = "fa fa-bars";
//     }
// }




