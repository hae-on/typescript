{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // object ⭐️
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };

  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  //   class ⭐️
  // class Pos1 implements PositionType {
  //   x: number;
  //   y: number;
  // }

  //   class Pos2 implements PositionInterface {
  //     x: number;
  //     y: number;
  //   }

  //   Extends ⭐️
  interface ZpositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  // only interfaces can be merged
  interface PositionInterface {
    z: number;
  }

  // type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; //string

  type NumberType = number;
  type Diretion = "left" | "right";
}
