import React from "react";
import SeedIcon from "./seed-icon.jsx";
import SeedAmong from "./seed-among.jsx";
import PriceAndProductType from "../libs/determine-price-and-product-type.js";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.inventoryList = this.props.inventoryList;
    }

    render() {
        return <div id="inventory">
            {this.inventoryList.map(el => <div key={el.type}>
                <SeedIcon icon={el.icon} handlerClick={null} />
                <SeedAmong among={el.among} />
            </div>)}
        </div>
    }
}