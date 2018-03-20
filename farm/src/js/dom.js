let barn = document.createElement("div"),
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
market.appendChild(marketTitle);

export {
    productList
};


