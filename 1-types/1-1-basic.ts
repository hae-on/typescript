{
  // JavaScript
  // old: var 💩
  //   var age = 5;
  //   age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const ages = 5;
  //   ages = 1; 오류발생

  //   Primitive: number, string, boolean, bigint, symbol, null, undefined
  //   Object: function, array...

  // number
  const num: number = 1;

  //   string
  const str: string = "hi";

  //   boolean
  const boal: boolean = false;

  //   undefined 비었는지 안 비었는지 모름
  //let name:undefined //💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null 확실히 비었음
  //let person: null //💩
  let person1: string | null;

  //   unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //   any 💩
  let anything: any = 0;
  anything = "hello";

  //   void
  function print(): void {
    console.log("hello");
    return;
  }
  //   let unusable: void = undefined 💩

  //   never
  function throwError(message: string): never {
    //   message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  //   let neverEnding: never; 💩

  //   object
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
