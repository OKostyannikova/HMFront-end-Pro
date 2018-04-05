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
    new Product("Tomato", 5, ["..img/tomato_1.png", "../img/tomato_2.png", "../img/tomato_3.png"], "./src/img/tomato-icon.png"),
    new Product("Potato", 3, ["..img/potato_1.png", "../img/potato_2.png", "../img/potato_3.png"], "./src/img/potato-icon.png"),
    new Product("Pumkin", 10, ["..img/pumkin_1.png", "../img/pumkin_2.png", "../img/pumkin_3.png"], "./src/img/pumkin-icon.png"),
    new Product("Watermelon", 10, ["..img/watermelon_1.png", "../img/watermelon_2.png", "../img/watermelon_3.png"], "./src/img/watermelon-icon.png"),
    new Product("Salad", 10, ["..img/salad_1.png", "../img/salad_2.png", "../img/salad_3.png"], "./src/img/salad-icon.png"),
    new Product("Strawberry", 10, ["..img/strawberry_1.png", "../img/strawberry_2.png", "../img/strawberry_3.png"], "./src/img/strawberry-icon.png")
]


export const farm = new Farm(products);