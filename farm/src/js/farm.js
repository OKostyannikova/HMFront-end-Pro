export default class Farm {
    constructor(products) {
        this.shop = products;
        this.storage = [];
        this.field = [];
        this.coins = 1000;
        this.inventory = [];
    }

    sellProducts() {
        this.storage.forEach((product) => {
            this.coins += product.cost * product.income;
            delete product.income;
        });
        this.storage.length = 0;
    }
}


