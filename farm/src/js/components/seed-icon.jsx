import React from "react";
import { farm } from "../product.js";

export default ({ icon, handlerClick }) => <img src={icon} onClick={handlerClick} />