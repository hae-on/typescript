{
  // Intersection Types: &
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolteeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolteeId, person.work());
  }

  internWork({
    name: "ellie",
    score: 1,
    empolteeId: 123,
    work: () => {},
  });
}
