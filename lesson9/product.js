function Product(type, cost) {
    this.type = type;
    this.cost = cost;
}

var resources = [
    new Resource("Apple", new Product("apple", 5)),
    new Resource("Carrot", new Product("carrot", 4)),
    new Resource("Banana", new Product("banana", 4))
];
var farm = new Farm(resources);


/*farm.plant();
setTimeout(function () {
    farm.harvest();
}, 2000);*/
