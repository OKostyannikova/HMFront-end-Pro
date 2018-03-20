import { farm } from "./js/product";

require("./styles/style.css");
require("./js/dom");
require("./js/product");

farm.plant();

setTimeout(function () {
    farm.plant();
}, 80000);
