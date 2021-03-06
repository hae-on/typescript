{
  // JavaScript
  // old: var π©
  //   var age = 5;
  //   age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const ages = 5;
  //   ages = 1; μ€λ₯λ°μ

  //   Primitive: number, string, boolean, bigint, symbol, null, undefined
  //   Object: function, array...

  // number
  const num: number = 1;

  //   string
  const str: string = "hi";

  //   boolean
  const boal: boolean = false;

  //   undefined λΉμλμ§ μ λΉμλμ§ λͺ¨λ¦
  //let name:undefined //π©
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null νμ€ν λΉμμ
  //let person: null //π©
  let person1: string | null;

  //   unknown π©
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //   any π©
  let anything: any = 0;
  anything = "hello";

  //   void
  function print(): void {
    console.log("hello");
    return;
  }
  //   let unusable: void = undefined π©

  //   never
  function throwError(message: string): never {
    //   message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  //   let neverEnding: never; π©

  //   object
  let obj: object; //π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
