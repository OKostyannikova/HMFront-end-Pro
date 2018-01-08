function Farm(resources) {
    this.farm = [];
    this.farm = this.farm.concat(resources);
    this.products = [];
    this.cash = 0;
}

Farm.prototype.plant = function () {
    this.farm.forEach(function (resource) {
        resource.plant();
    })
};

Farm.prototype.harvest = function () {
    this.farm.forEach(function (resource) {
        resource.harvest();
    });
};

Farm.prototype.sellProducts = function () {
    this.products.forEach(function (product) {
        farm.cash += product.cost * product.income;
        delete product.income;
    });
    this.products.length = 0;
};

var timer = setInterval(function () {
    var ready = farm.farm.every(function (resource) {
        return resource.readyHarvest === 1;
    });
    if (ready) {
        clearInterval(timer);
        console.log("All resources ready to harvest");
    }
}, 2000);


