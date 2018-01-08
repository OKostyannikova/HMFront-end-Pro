var barn = document.createElement("div"),
    market = document.createElement("div"),
    barnTitle = document.createElement("h4"),
    marketTitle = document.createElement("h4"),
    productList = document.createElement("ul");

barnTitle.innerHTML = "Barn";
marketTitle.innerHTML = "Market";


farm.farm.forEach(function (res) {
    var resource = document.createElement("div"),
        resTitle = document.createElement("h4"),
        listOfProducts = document.createElement("ul"),
        listElement = document.createElement("li");

    resource.classList.add("resource");
    resTitle.classList.add("resource-title");

    resTitle.innerHTML = res.name;
    listElement.innerHTML = res.product.type;

    field.appendChild(resource);
    resource.appendChild(resTitle);
    resource.appendChild(listOfProducts);
    listOfProducts.appendChild(listElement);
});

Resource.prototype.showProductsList = function () {
    var productListElement = document.createElement("li");
    productListElement.innerHTML = this.product.income + " " + this.product.type + "(s)";
    productList.appendChild(productListElement);
};

buildings.appendChild(barn);
buildings.appendChild(market);
barn.appendChild(barnTitle);
barn.appendChild(productList);
market.appendChild(marketTitle);


