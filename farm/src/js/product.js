import Resource from "./resource";
import Farm from "./farm";

class Product {
    constructor(type, cost, growImgs, icon) {
        this.type = type;
        this.cost = cost;
        this.growImgs = growImgs;
        this.icon = icon;
    }
}
const products = [
    new Product("Tomato", 5, ["..img/tomato_1.png", "../img/tomato_2.png", "../img/tomato_3.png"], "../img/tomato-icon.png"),
    new Product("Pumkin", 10, ["..img/pumkin_1.png", "../img/pumkin_2.png", "../img/pumkin_3.png"], "../img/punkin-icon.png"),
]


export const farm = new Farm(products);