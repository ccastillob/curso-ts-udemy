"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 25,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Destiny',
        age: 25,
        address: {
            id: 125,
            zip: 'KYS SU2',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Creative',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S 241'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map