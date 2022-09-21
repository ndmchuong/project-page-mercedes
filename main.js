const arrImgTextBanner = [
    {
        src: "url(../img/Slideshow-banner/mercedes_benz_c_300_amg_line_2022_4k_3-HD.jpg)",
        textModel: "C-Class",
        textSlogan: "Đây là thế giới của tôi",
        href: "c-class.html"
    },

    {
        src: "url(../img/Slideshow-banner/banner-mercedes_benz_e_300_amg_line.jpg)",
        textModel: "E-Class",
        textSlogan: "Chọn dẫn đầu",
        href: "e-class.html"
    },
    {
        src: "url(../img/Slideshow-banner/banner-mercedes_benz_s_450_4matic.jpg)",
        textModel: "S-Class",
        textSlogan: "Một hành trình phi thường",
        href: "s-class.html"
    },
    {
        src: "url(../img/Slideshow-banner/banner-Mercedes-GLC-300-4Matic-2022.jpg)",
        textModel: "GLC",
        textSlogan: "Mạnh mẽ đa tài",
        href: "glc.html"
    }

];
let indexSlide = 0;
const handleSlideBanner = () => {
    indexSlide += 1;
    if (indexSlide == arrImgTextBanner.length) {
        indexSlide = 0;
    }
    
    let bgBanner = document.getElementsByClassName("banner")[0];
    let textModel = document.getElementsByClassName("banner-text-model")[0];
    let textSlogan = document.getElementsByClassName("banner-text-slogan")[0];
    let linkDetail = document.getElementsByClassName("banner-link-detail")[0];
    // custom background-image and text
    bgBanner.style.backgroundImage = `${arrImgTextBanner[indexSlide].src}`;
    textModel.innerText = `${arrImgTextBanner[indexSlide].textModel}`;
    textSlogan.innerText = `${arrImgTextBanner[indexSlide].textSlogan}`;
    linkDetail.href = `${arrImgTextBanner[indexSlide].href}`;

} 
setInterval(handleSlideBanner, 5000);