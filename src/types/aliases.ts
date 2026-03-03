// Using a type alias we can create a new name (alias) for a type. We often use type aliases to create custom types.

type Employee = {
  readonly id: number;
  name: string;
};

let employee: Employee = {
  id: 1,
  name: "ab",
};

console.log(employee);
