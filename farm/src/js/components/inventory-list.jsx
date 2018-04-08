import React from "react";
import ReactDOM from "react-dom";
import SeedIcon from "./seed-icon.jsx";
import SeedAmong from "./seed-among.jsx";
import { farm, productsList } from "../product.js";
import PriceAndProductType from "../libs/determine-price-and-product-type.js";

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.inventoryList = props.inventoryList;
        this.plant = this.plant.bind(this);
    }

    buySeeds(e) {
        const { seedPrice, purchasedSeed } = PriceAndProductType(e);
        if (farm.coin >= seedPrice) {
            if (purchasedSeed.among) {
                purchasedSeed.among++
            } else {
                purchasedSeed.among = 1;
                farm.inventory.push(purchasedSeed);
            }
            farm.coin -= seedPrice;
        } else {
            console.log("Not enough money!");
        }
    }

    render() {
        return this.seedsList.map(el => <div key={el.type}>
            <SeedIcon icon={el.icon} handlerClick={this.buySeeds} />
            <SeedAmong cost={el.among} />
        </div>)
    }
}

ReactDOM.render(<InventoryList inventoryList={farm.inventory} />, document.getElementById("inventory"));