import React from "react";
import ReactDOM from "react-dom";
import SeedIcon from "./seed-icon.jsx";
import SeedPrice from "./seed-price.jsx";
import { farm, productsList } from "../product.js";
import PriceAndProductType from "../libs/determine-price-and-product-type.js";

class ShopList extends React.Component {
    constructor(props) {
        super(props);
        this.seedsList = props.seedsList;
        this.buySeeds = this.buySeeds.bind(this);
    }

    buySeeds(e) {
        const { seedPrice, purchasedSeed } = PriceAndProductType(e);
        if (farm.coins >= seedPrice) {
            if (purchasedSeed.among) {
                purchasedSeed.among++
            } else {
                purchasedSeed.among = 1;
                farm.inventory.push(purchasedSeed);
            }
            farm.coins -= seedPrice;
        } else {
            console.log("Not enough money!");
        }
    }

    render() {
        return this.seedsList.map(el => <div key={el.type}>
            <SeedIcon icon={el.icon} handlerClick={this.buySeeds} />
            <SeedPrice cost={el.cost * 2} />
        </div>)
    }
}

ReactDOM.render(<ShopList seedsList={farm.shop} />, document.getElementById("seeds-list"));