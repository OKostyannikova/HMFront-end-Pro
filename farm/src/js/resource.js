import { farm } from "./product";

export default class Resource {
    constructor(name, product) {
        this.name = name;
        this.product = product;
        this.readyHarvest = 0;
        this.income = 0;
        this.durability = 5;
        this.sown = false;
    }

    isReadyForPlanting() {
        return this.sown === false && this.durability > 0;
    };

    plant() {
        try {
            if (!this.isReadyForPlanting()) {
                throw new Error("Resource is already planted!")
            }
            this.sown = true;
            this.durability -= 1;
            this.render();
            this.grow();
        } catch (err) {
            console.error(err);
        }
    };

    render() {
        let landPlot = document.createElement("div"),
            plotTitle = document.createElement("h4"),
            listOfProducts = document.createElement("ul"),
            listElement = document.createElement("li");

        landPlot.classList.add("land_plot");
        plotTitle.classList.add("land_plot-title");

        plotTitle.innerHTML = this.name;
        listElement.innerHTML = this.product.type;

        field.appendChild(landPlot);
        landPlot.appendChild(plotTitle);
        landPlot.appendChild(listOfProducts);
        listOfProducts.appendChild(listElement);

        landPlot.addEventListener("click", (e) => {
            this.harvest();
            e.currentTarget.innerHTML = "";
        })
    };

    grow() {
        setTimeout(() => {
            this.readyHarvest = 1;
            this.income = Math.floor(Math.random() * (20 - 15) + 15);
        }, 2000);
    };

    harvest() {
        if (this.readyHarvest) {
            if (this.product.income) {
                this.product.income += this.income;
            } else {
                this.product.income = this.income;
                farm.storage.push(this.product);
            }
            this.readyHarvest = 0;
            this.sown = false;
            console.log(farm.storage);
            farm.showProductsList();
            console.log("Grew " + this.income + " " + this.name);
        } else {
            console.log("Nothing to harvest!");
        }
    };

    restore() {
        this.durability = 5;
    };

}
