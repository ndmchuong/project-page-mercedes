import {dataProduct} from "./data.js";
import {handleSlideShowProduct, handleStopSlideShowProduct} from "./SlideShowProduct.js";
const GetDataProduct = (index, type) => {
    const productListBodytype = document.querySelectorAll(".product__list__bodytype")[index];
    productListBodytype.id = type;
    const productBodyType = dataProduct.filter(value => value.bodyType === type);
    productBodyType.map((item) => {
        const productItem = document.createElement("a");
        productItem.className = "product__list__bodytype--item product__item";
        productItem.id = `product-${item.id}`;
        productItem.href = item.link;
        const productItemName = document.createElement("h4");
        productItemName.className = "product__item--name";
        productItemName.innerText = item.name;
        const productItemPrice = document.createElement("span");
        productItemPrice.className = "product__item--price";
        let textPrice = item.price.toString();
        let hundred = textPrice.substr(-3, 3);
        let thousand = textPrice.substr(-6, 3);
        let milion = textPrice.substr(-9, 3);
        let bilion = Math.floor(item.price / 1000000000);
        productItemPrice.innerText = `Giá từ ${bilion}.${milion}.${thousand}.${hundred} đ`;
        const productItemImg = document.createElement("img");
        productItemImg.className = "product__item--img";
        productItemImg.src = item.img[0];
        productItem.appendChild(productItemName);
        productItem.appendChild(productItemPrice);
        productItem.appendChild(productItemImg);
        productItem.addEventListener("mouseover", () => {
            handleSlideShowProduct(item.id);
        });
        productItem.addEventListener("mouseout", () => {
            handleStopSlideShowProduct(item.id);
        });
        productListBodytype.appendChild(productItem);
    })
}
GetDataProduct(0, "sedan");
GetDataProduct(1, "suv");
GetDataProduct(2, "coupe");