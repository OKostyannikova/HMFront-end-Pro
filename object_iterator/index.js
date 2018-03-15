const obj = { d: 20, a: 5, c: 15, b: 10 };

obj[Symbol.iterator] = function () {
    const keys = Object.keys(this).sort();
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

for (let i of obj) {
    console.log(i);
}