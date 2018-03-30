class Ship<T> {
    private products: T[] = [];

    constructor(
        public name: string,
        public date: string,
        public captain: string,
        public numberOfPassengers: number
    ) { }

    addProduct(product: T) {
        this.products.push(product);
    }
}

abstract class Passenger {
    constructor(
        public name: string,
        public cabin: number
    ) { }
    abstract category: string

}

class Premium extends Passenger {
    category: string = "premium";
    typeOfFood: string = "Full Board";
    constructor(public name: string,
        public cabin: number,
    ) {
        super(name, cabin);
    }
}

class VIP extends Passenger {
    category: string = "vip";
    typeOfFood: string = "Ultra All Inclusive";
    constructor(public name: string,
        public cabin: number,
    ) {
        super(name, cabin);
    }
}

abstract class Product {
    constructor(
        public category: string,
        public name: string
    ) { }
}

class VIP_PRODUCTS extends Product {
    constructor(
        public category: string,
        public name: string
    ) { super(category, name) }
}

let vipLiner = new Ship<VIP_PRODUCTS>("SEASIDE", "12.06.2018", "John Smith", 230);

vipLiner.addProduct(new VIP_PRODUCTS("meat", "chicken"));