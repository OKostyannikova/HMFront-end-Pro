import React from "react";
import ReactDOM from "react-dom";
import { farm } from "../product.js";

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coins: this.props.coins
        }
    }

    render() {
        return <span>{this.state.coins}</span>
    }
}

ReactDOM.render(<Money coins={farm.coins} />, document.querySelector("#money > span"));