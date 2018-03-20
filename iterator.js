class Foo {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    [Symbol.iterator]() {
        let keys = Object.keys(this);
        let index = 0;

        return {
            next: () => {
                if (index < keys.length) {
                    let prop = keys[index++];
                    return {
                        value: [prop, this[prop]],
                        done: false,
                    };
                }
                return { done: true };
            }
        }
    }
}

let obj = new Foo(5, 10, 15);
console.log(...obj);