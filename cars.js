class car {
  constructor(make, model, colour, image, registrationNumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.registrationNumber = registrationNumber;
    this.price = price;
  }

  editPrice(newPrice) {
    this.price = newPrice;
  }
  showAll() {
    console.log(
      "make = " +
        this.make +
        " model = " +
        this.model +
        " colour = " +
        this.colour +
        " image = " +
        this.image +
        " registration Number = " +
        this.registrationNumber +
        " price = " +
        this.price
    );
  }
}

const obj1 = new car("2010", "2010", "red", "car1.jpg", "1111", "50000");
const obj2 = new car("2011", "2011", "blue", "car2.jpg", "2222", "60000");
const obj3 = new car("2012", "2012", "red", "car3.jpg", "3333", "70000");
const obj4 = new car("2013", "2013", "black", "car4.jpg", "4444", "80000");
const obj5 = new car("2014", "2014", "white", "car5.jpg", "5555", "90000");

console.log("Current info:");
obj1.showAll();
obj2.showAll();
obj3.showAll();
obj4.showAll();
obj5.showAll();

obj1.editPrice(obj1.price * 1.15);
obj2.editPrice(obj2.price * 1.15);
obj3.editPrice(obj3.price * 1.15);
obj4.editPrice(obj4.price * 1.15);
obj5.editPrice(obj5.price * 1.15);

console.log("Info after change price:");

obj1.showAll();
obj2.showAll();
obj3.showAll();
obj4.showAll();
obj5.showAll();
