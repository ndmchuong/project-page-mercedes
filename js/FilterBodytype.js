const handleFilterBodytype = (filterName, btnFilter) => {
    const productListBodytype = document.querySelectorAll(".product__list__bodytype");
    const productFilterBtn = document.querySelectorAll(".product__filter--btn");
    productListBodytype.forEach((item) => {
        if (filterName === "view-all") {
            item.style.display = ""
        }
        else if (item.id !== filterName) {
            item.style.display = "none"
        }
        else {
            item.style.display = ""
        }
    });
    productFilterBtn.forEach((item) => {
        if (item.id === btnFilter) {
            item.style.color = "#fff";
            item.style.backgroundColor = "#000";
        }
        else {
            item.style.color = "#00197e";
            item.style.backgroundColor = "rgb(200, 200, 200)";
        }
    });
}
const btnFilterSedan = document.querySelector("#filter-sedan").addEventListener("click", () => handleFilterBodytype("sedan", "filter-sedan"));
const btnFilterSuv = document.querySelector("#filter-suv").addEventListener("click", () => handleFilterBodytype("suv", "filter-suv"));
const btnFilterCoupe = document.querySelector("#filter-coupe").addEventListener("click", () => handleFilterBodytype("coupe", "filter-coupe"));
const btnViewAll = document.querySelector("#view-all").addEventListener("click", () => handleFilterBodytype("view-all", "view-all"));