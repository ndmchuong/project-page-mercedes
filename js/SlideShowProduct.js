import {dataProduct} from "./data.js";
let indexSlideshowImg = 1;
let showImg;
export const handleSlideShowProduct = (id) => {
    // Lay ra mang thong tin san pham trung voi san pham duoc chi dinh
    const product = dataProduct.filter(value => value.id === id);
    // Lay the img va mang cac src image
    const productItem = document.querySelector(`#product-${id}`);
    const productItemImg = productItem.children[2];
    let srcProductImg = product[0].img;
    // set src cua the img
    productItemImg.src = `${srcProductImg[indexSlideshowImg]}`;
    // set image tu chuyen doi sau t(s)
    showImg = setInterval(() => {
        indexSlideshowImg += 1;
        if (indexSlideshowImg === srcProductImg.length) {
            indexSlideshowImg = 1;
        };
        productItemImg.src = `${srcProductImg[indexSlideshowImg]}`;
    }, 2000);
}

export const handleStopSlideShowProduct = (id) => {
    clearInterval(showImg);
    // Lay ra mang thong tin san pham trung voi san pham duoc chi dinh
    const product = dataProduct.filter(value => value.id === id);
    // Lay the img va mang cac src image
    const productItem = document.querySelector(`#product-${id}`);
    const productItemImg = productItem.children[2];
    let srcProductImg = product[0].img;
    // set src cua the img
    productItemImg.src = `${srcProductImg[0]}`;
    indexSlideshowImg = 1;
}
