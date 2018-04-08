import Farm from "./farm";

class Product {
    constructor(type, cost, growImgs, icon, income) {
        this.type = type;
        this.cost = cost;
        this.growImgs = growImgs;
        this.icon = icon;
        this.income = income;
    }
}

const tomato = new Product("tomato", 3, ["..img/tomato_1.png", "../img/tomato_2.png", "../img/tomato_3.png"], "./src/img/tomato-icon.png", 10),
    potato = new Product("potato", 3, ["..img/potato_1.png", "../img/potato_2.png", "../img/potato_3.png"], "./src/img/potato-icon.png", 10),
    pumkin = new Product("pumkin", 10, ["..img/pumkin_1.png", "../img/pumkin_2.png", "../img/pumkin_3.png"], "./src/img/pumkin-icon.png", 5),
    watermelon = new Product("watermelon", 10, ["..img/watermelon_1.png", "../img/watermelon_2.png", "../img/watermelon_3.png"], "./src/img/watermelon-icon.png", 5),
    salad = new Product("salad", 10, ["..img/salad_1.png", "../img/salad_2.png", "../img/salad_3.png"], "./src/img/salad-icon.png", 5),
    strawberry = new Product("strawberry", 3, ["..img/strawberry_1.png", "../img/strawberry_2.png", "../img/strawberry_3.png"], "./src/img/strawberry-icon.png", 15);

const products = [tomato, potato, pumkin, watermelon, salad, strawberry];
const productsList = {
    tomato,
    potato,
    pumkin,
    watermelon,
    salad,
    strawberry
}

const farm = new Farm(products);
export {
    farm,
    productsList
}