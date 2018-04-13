import PriceAndProductType from "./get-price-and-product-type.js";
import Resourse from "../resource.js";

export default function (e, updateInventory) {
    if (e.nativeEvent.which == 3) {
        return;
    }
    const seed = e.currentTarget.cloneNode();
    const { purchasedSeed: product } = PriceAndProductType(e);
    document.onmousemove = function (e) {
        seed.style.position = 'absolute';
        seed.style.width = '60px';
        moveAt(e, seed);
        document.body.appendChild(seed);
        seed.style.zIndex = 1000;
        moveAt(e, seed);


        seed.ondragstart = function () {
            return false;
        };

        seed.onmouseup = function () {
            let plot = findDroppable(e, seed);
            if (plot) {
                let resouse = new Resourse(plot, product);
                resouse.plant();
                updateInventory();
            }
            document.onmousemove = null;
            seed.onmouseup = null;
            document.body.removeChild(seed);
        }
    }

    e.currentTarget.onmouseup = function () {
        document.onmousemove = null;
    }
}

function moveAt(e, seed) {
    seed.style.left = e.pageX - seed.offsetWidth / 2 + 'px';
    seed.style.top = e.pageY - seed.offsetHeight / 2 + 'px';
}

function findDroppable(e, seed) {
    seed.hidden = true;
    var elem = document.elementFromPoint(e.clientX, e.clientY);
    seed.hidden = false;
    if (elem == null) {
        return null;
    }
    return elem.closest('.free_seed-plot');
}