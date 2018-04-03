import { productList } from "./dom";

export default class Farm {
    constructor(products) {
        this.shop = products;
        this.storage = [];
        this.coin = 0;
        this.inventory = [];
    }

    showProductsList() {
        productList.innerHTML = "";
        this.storage.forEach(function (product) {
            let productListElement = document.createElement("li");
            productListElement.innerHTML = product.income + " " + product.type + "(s)";
            productList.appendChild(productListElement);
        })
    }

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


