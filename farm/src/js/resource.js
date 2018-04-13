import { farm } from "./product";

export default class Resource {
    constructor(plot, product) {
        this.plot = plot;
        this.land = this.plot.firstChild;
        this.product = product;
        this.readyHarvest = false;
        this.sown = false;
    }

    plant() {
        this.sown = true;
        this.plot.className = "";
        this.updateInventory();
        this.grow();
    };

    updateInventory() {
        farm.inventory.forEach((el, i, inventory) => {
            el.type === this.product.type ? el.among-- : null;
            el.among == 0 ? inventory.splice(i, 1) : null;
        })
    }

    grow() {
        let { possibleIncome } = this.product;
        setTimeout(() => {
            this.readyHarvest = true;
            this.income = Math.floor(Math.random() * ((possibleIncome + 5) - possibleIncome) + possibleIncome);
        }, this.product.growthTime);

        this.growAnimation();
        this.plot.onclick = (e) => this.harvest();
    };

    growAnimation() {
        const images = this.product.growImgs.slice();
        let growTime = this.product.growthTime;
        let land = this.land;
        (function f() {
            const image = images.shift();
            image && (land.src = image) && setTimeout(f, growTime / 3);
        }())
    }

    harvest() {
        if (this.readyHarvest) {
            if (this.product.income) {
                this.product.income += this.income;
            } else {
                this.product.income = this.income;
                farm.storage.push(this.product);
            }
            this.readyHarvest = false;
            this.sown = false;
            this.restorePlot();

            console.log("Grew " + this.income + " " + this.product.type);
        } else {
            console.log("Nothing to harvest!");
        }
    };

    restorePlot() {
        this.plot.className = "free_seed-plot";
        this.land.src = "./src/img/unit_land.png";
        this.plot.onclick = null;
    }
}
