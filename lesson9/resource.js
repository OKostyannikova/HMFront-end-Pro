function Resource(name, product) {
    this.name = name;
    this.product = product;
    this.readyHarvest = 0;
    this.income = 0;
    this.durability = 5;
    this.sown = false;
}

Resource.prototype.isReadyForPlanting = function () {
    return this.sown === false && this.durability > 0;
};

Resource.prototype.plant = function () {
    try {
        if (!this.isReadyForPlanting()) {
            throw new Error("Resource is already planted!")
        }
        this.sown = true;
        this.durability -= 1;
        this.grow();
    } catch (err) {
        console.error(err);
    }
};

Resource.prototype.grow = function () {
    var obj = this;
    setTimeout(function () {
        obj.readyHarvest = 1;
        obj.income = Math.floor(Math.random() * (20 - 15) + 15);
    }, 1000);
};

Resource.prototype.harvest = function () {
    if (this.readyHarvest) {
        if (this.product.income) {
            this.product.income += this.income;
        } else {
            this.product.income = this.income;
            farm.products.push(this.product);
        }
        this.readyHarvest = 0;
        this.sown = false;
        this.showProductsList();
        console.log("Grew " + this.income + " " + this.name);
    } else {
        console.log("Nothing to harvest!");
    }
};

Resource.prototype.restore = function () {
    this.durability = 5;
};

Resource.prototype.clone = function () {
    var clone = {};
    for (var key in this) {
        clone[key] = this[key];
    }
    return clone;
};
