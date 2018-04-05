import { shopWindow, moneyDom } from "./dom";

export default class Farm {
    constructor(products) {
        this.shop = products;
        this.storage = [];
        this.coin = 20;
        this.inventory = [];
    }
    showProductsList() {
        this.shop.forEach((product) => {
            let seed = document.createElement("div"),
                seedIcon = new Image(),
                seedPrice = document.createElement("span");

            seedIcon.src = product.icon;
            seedPrice.innerHTML = ` ${product.cost}$`;

            seed.appendChild(seedIcon);
            seed.appendChild(seedPrice);
            shopWindow.appendChild(seed);
        })
    }
    showMoney() {
        moneyDom.innerHTML = this.coin;
    }

    /*   showProductsList() {
          productList.innerHTML = "";
          this.storage.forEach(function (product) {
              let productListElement = document.createElement("li");
              productListElement.innerHTML = product.income + " " + product.type + "(s)";
              productList.appendChild(productListElement);
          })
      } */

    sellProducts() {
        this.storage.forEach((product) => {
            this.coin += product.cost * product.income;
            delete product.income;
        });
        this.storage.length = 0;
    }

    timer() {
        let timer = setInterval(() => {
            let ready = this.field.every((resource) => {
                return resource.readyHarvest === 1;
            });
            if (ready) {
                clearInterval(timer);
                console.log("All resources ready to harvest");
            }
        }, 2000);
    }
}


