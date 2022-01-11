{
  // Array
  const fruits: string[] = ["🍎", "🍇"];
  const scores: Array<number> = [1, 3, 5];
  function printArray(fruits: readonly string[]) {
    //   fruits.push 에러발생
  }

  //   Tuple -> interface, type, alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name 가독성 떨어짐
  student[1]; //123 가독성 떨어짐
  const [name, age] = student;
}
