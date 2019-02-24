class Bird {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.eggs = 0;
    }

    fly() {
        console.log(`${this.color} ${this.type} is flying`);
    }

    walk() {
        console.log(`${this.color} ${this.type} is walking`);
    }

    lay_egg() {
        this.eggs++;
        console.log(`${this.color} ${this.type} laid an eggs!`);
    }
}

class Parrot extends Bird {
    constructor(type, color) {
        super(type, color);
        this.type = type;
        this.color = color;
    }

    talk() {
        console.log(`${this.color} ${this.type} is talking`);
    }
}

let parakeet = new Parrot("parakeet", "time yellow");
parakeet.fly();
parakeet.talk();
//parakeet.sing();

