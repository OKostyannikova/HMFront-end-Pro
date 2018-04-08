import { shopWindow, moneyDom } from "./dom";

export default class Farm {
    constructor(products) {
        this.shop = products;
        this.storage = [];
        this.coins = 20;
        this.inventory = [];
    }

    showMoney() {
        moneyDom.innerHTML = this.coins;
    }

    sellProducts() {
        this.storage.forEach((product) => {
            this.coins += product.cost * product.income;
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


