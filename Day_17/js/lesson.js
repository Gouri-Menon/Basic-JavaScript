class Product {
  constructor(name, priceInPaise) {
    this.name = name;
    this._priceInPaise = priceInPaise;
  }

  // Getter — access like: p.priceInRupees
  get priceInRupees() {
    return this._priceInPaise / 100;
  }

  // Setter — assign like: p.priceInRupees = 100
  set priceInRupees(rupees) {
    if (rupees < 0) {
      throw new Error("Price cannot be negative");
    }

    this._priceInPaise = rupees * 100;
  }

  // Derived value (18% GST)
  get priceWithGST() {
    return this.priceInRupees * 1.18;
  }
}

// Create object
const p = new Product("Notebook", 5000); // ₹50.00

console.log(p.priceInRupees); // 50

console.log(p.priceWithGST); // 59

p.priceInRupees = 100;

console.log(p.priceInRupees); // 100

// Uncomment to test validation
// p.priceInRupees = -10;



// —— Task 2 — reference solution ——
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    // MUST call super before using `this`
    super(name);

    // Own property of Dog
    this.breed = breed;
  }

  // Method overriding
  speak() {
    // Call parent method first
    super.speak();

    console.log(`${this.name} barks!`);
  }
}

// Create Dog object
const d = new Dog("Bruno", "Labrador");

d.speak();

console.log(d instanceof Dog);
console.log(d instanceof Animal);




