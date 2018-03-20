import { productList } from "./dom";

export default class Farm {
    constructor(resources) {
        this.field = [];
        this.field = this.field.concat(resources);
        this.storage = [];
        this.market = [];
        this.coin = 0;
    }

    plant() {
        this.field.forEach(function (resource) {
            resource.plant();
        });
        this.timer();
    };

    harvest() {
        this.field.forEach(function (resource) {
            resource.harvest();
        });
    };

    showProductsList() {
        productList.innerHTML = "";
        this.storage.forEach(function (product) {
            let productListElement = document.createElement("li");
            productListElement.innerHTML = product.income + " " + product.type + "(s)";
            productList.appendChild(productListElement);
        })
    }

    sellProducts() {
        this.storage.forEach(function (product) {
            this.coin += product.cost * product.income;
            delete product.income;
        });
        this.storage.length = 0;
    }

    timer() {
        let self = this;
        let timer = setInterval(function () {
            let ready = self.field.every(function (resource) {
                return resource.readyHarvest === 1;
            });
            if (ready) {
                clearInterval(timer);
                console.log("All resources ready to harvest");
            }
        }, 2000);
    }
}


