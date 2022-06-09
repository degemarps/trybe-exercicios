import Colors from "./colors";
import Doors from "./doors";
import Directions from "./directions";

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {};

  openTheDoor(door: Doors): void {};

  closeTheDoor(door: Doors): void {};

  turnOn(): void {};

  turnOff(): void {};

  speedUp(): void {};

  speedDown(): void {};

  stop(): void {};

  turn(direction: Directions): void {};
};

export default Car;