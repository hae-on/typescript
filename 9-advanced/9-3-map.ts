{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; //for ... in
  };
  type VideoOptional = Optional<Video>;

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "df",
    description: "ff",
  };
  //   video.title = "g"; 할당 불가

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: "hi",
  };
}
