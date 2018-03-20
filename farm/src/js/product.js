import Resource from "./resource";
import Farm from "./farm";

function Product(type, cost) {
    this.type = type;
    this.cost = cost;
}


const resources = [
    new Resource("Apple", new Product("apple", 5)),
    new Resource("Carrot", new Product("carrot", 4)),
    new Resource("Banana", new Product("banana", 4))
];


export const farm = new Farm(resources);