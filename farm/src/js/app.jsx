import React from "react";
import ReactDOM from "react-dom";
import { farm, productsList } from "./product.js";
import Money from "./components/money.jsx";
import ShopList from "./components/shop-list.jsx";
import Barn from "./components/barn.jsx";
import Inventory from "./components/inventory.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.farm = props.farm;
        this.state = {
            money: this.farm.coins,
            inventory: this.farm.inventory
        }
        this.updateCoins = this.updateCoins.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
    }

    updateCoins() {
        this.setState({ money: this.farm.coins })
    }

    updateInventory() {
        this.setState({ inventory: this.farm.inventory })
    }

    render() {
        return <div id="farm">
            <Money coins={this.farm.coins} money={this.state.money} />
            <ShopList shop={this.farm.shop} updateCoins={this.updateCoins} updateInventory={this.updateInventory} />
            <Barn />
            <Inventory inventoryList={this.farm.inventory} inventory={this.state.inventory} />
        </div >
    }
}

ReactDOM.render(<App farm={farm} />, document.getElementById("app"));