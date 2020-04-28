class BaseSweet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class ChocolateSweet extends BaseSweet {
    constructor(name, weight) {
        super(name, weight);
        this.type = 'Chokolate';
    }
}

class Caramel extends BaseSweet {
    constructor(name, weight) {
        super(name, weight);
        this.type = 'Caramel';
    }
}

class Present {
    constructor(name) {
        this.name = name;
        this.weight = 0;
        this.sweets = [];
    }

    addItem(sweet, count) {
        this.weight += sweet.weight * count;
        this.sweets.push({ sweet, count })
    }

    sortBy(key) {
        return this.sweets.sort((a, b) => {
            if (a.sweet[key] < b.sweet[key]) {
                return -1;
            }
            if (a.sweet[key] > b.sweet[key]) {
                return 1;
            }
            return 0;
        });
    }

    findByName(name) {
        return this.sweets.find(function (value) {
            return value.sweet.name === name
        })
    }
}

const belochka = new ChocolateSweet('belochka', 20);
const mars = new ChocolateSweet('mars', 30);
const twix = new ChocolateSweet('twix', 20);
const baunty = new ChocolateSweet('baunty', 40);
const snickers = new ChocolateSweet('snickers', 35);
const barbaris = new Caramel('barbaris', 15);
const mechta = new Caramel('mechta', 15);
const chupachups = new Caramel('chupachups', 20);
const present1 = new Present('NewYear');

present1.addItem(belochka, 5);
present1.addItem(mars, 4);
present1.addItem(barbaris, 1);

console.log(present1.sortBy('weight'));
console.log(present1.findByName('mars'));
