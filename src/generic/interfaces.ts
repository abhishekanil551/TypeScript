interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Tools" };
const numberBox: Box<number> = { content: 42 };