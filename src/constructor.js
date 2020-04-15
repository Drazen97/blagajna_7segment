export class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

export class Truck extends Car {
  constructor(name, color, wheels) {
    super(name, color);
    this.wheels = wheels;
  }
}