import { farm } from "./product";

/* let barn = document.createElement("div"),
    market = document.createElement("div"),
    barnTitle = document.createElement("h4"),
    marketTitle = document.createElement("h4"),
    productList = document.createElement("ul");

barnTitle.innerHTML = "Barn";
marketTitle.innerHTML = "Market";

buildings.appendChild(barn);
buildings.appendChild(market);
barn.appendChild(barnTitle);
barn.appendChild(productList);
market.appendChild(marketTitle); */

const shopBtn = document.getElementById("shop_btn"),
    shopWindow = document.getElementById("shop"),
    moneyDom = document.querySelector("#money > span");

shopBtn.addEventListener("click", () => {
    shopWindow.classList.toggle("show_shop");
});

window.onload = function () {
    farm.showProductsList();
    farm.showMoney();
}

export {
    shopWindow,
    moneyDom
}


