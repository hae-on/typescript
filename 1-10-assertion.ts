{
  // Type Assertions 💩
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  (result as string).length;
  //   100% 장담할 때만 사용

  const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1)) 에러 발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  //   numbers.push(2); 😱
  numbers!.push(2); //장담할 때 사용

  const button = document.querySelector("class")!;
}
