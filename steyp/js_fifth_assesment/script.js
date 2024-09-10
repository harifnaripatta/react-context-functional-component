class Car {
  constructor(mileage, length, boot_space) {
    this.mileage = mileage;
    this.length = length;
    this.boot_space = boot_space;
  }
  details() {
    const mileage = document.createElement("h3");
    mileage.innerHTML = `Car MIleage is : ${this.mileage}`;
    document.body.appendChild(mileage);
    const length = document.createElement("h3");
    length.innerHTML = `Car Length is : ${this.length}`;
    document.body.appendChild(length);
    const bootSpace = document.createElement("h3");
    bootSpace.innerHTML = `Car Boot Space is : ${this.boot_space}`;
    document.body.appendChild(bootSpace);
  }
}
let myCar = new Car(100, 20, 6);
myCar.details();
