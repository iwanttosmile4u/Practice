// Типи даних

// const isFetching: boolean = true;
// const isLoading: boolean = false;

// const int: number = 42;
// const float: number = 4.2;

// const message: string = "Hello Typescript";

// const numberArr: number[] = [1, 1, 2, 3, 5, 8, 13];
// const numberArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

// const contact: [string, number] = ["Tania", 1234567];

// let variable: any = 42;
// variable = "New string";

// function sayMyName(name: string): void {
//   console.log(name);
// }
// sayMyName("Tania");

// type Login = string;
// const login: Login = "admin";

// type ID = string | number;
// const id1: ID = 1234;
// const id2: ID = "1234";

// Інтерфейси

// interface Rect {
//   readonly id: string;
//   color?: string;
//   size: {
//     width: number;
//     height: number;
//   };
// }

// const rect1: Rect = {
//   id: "1234",
//   size: {
//     width: 20,
//     height: 30,
//   },
//   color: "#ccc",
// };

// Наслідування інтерфейсів

// interface RectWithArea extends Rect {
//     getArea: () => number
// }

// const rect2: RectWithArea = {
//     id: '123',
//     size: {
//         width: 20,
//         height: 20
//     },
//     getArea(): number {
//         return this.size.width * this.size.height
//     }
// }

// Наслідування інтерфейсами класів

// interface IClock {
//     time: Date,
//     setTime(date: Date): void
// }

// class Clock implements IClock {
//     time: Date = new Date(),
//     setTime(date: Date): void {
//         this.time = date;
//     }
//  }

// Enum

// enum Membership {
//   Simple,
//   Standard,
//   Premium,
// }

// const membership = Membership.Standard;
// console.log(membership);

// enum GoodStatus {
//   OpenedForSale = "opened",
//   ClosedForSales = "closed",
//   NotFound = "no",
// }

// function sum(a: number, b: number): number {
//   return a + b;
// }

// function toUpperCase(str: string): string {
//   return str.trim().toUpperCase();
// }

// Перегрузка функцій

// interface MyPosition {
//   x: number | undefined;
//   y: number | undefined;
// }

// interface MyPositionWithDefault extends MyPosition {
//   default: string;
// }

// function position(): MyPosition;
// function position(a: number): MyPositionWithDefault;
// function position(a: number, b: number): MyPosition;

// function position(a?: number, b?: number) {
//   if (!a && !b) {
//     return { x: undefined, y: undefined };
//   }
//   if (a && !b) {
//     return { x: a, y: undefined, default: a.toString() };
//   }
//   return { x: a, y: b };
// }
// console.log("Empty: ", position());
// console.log("One param: ", position(42));
// console.log("Two params: ", position(10, 15));

// Класи

class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//     readonly model: string,
//     readonly numberOfWheels: number = 4,

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// class Car {
//     readonly numberOfWheels: number = 4
//     constructor(readonly model: string) {}
// }

// Модифікатори полів у класах

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
