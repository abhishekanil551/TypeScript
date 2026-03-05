class Shape {
  draw() { console.log("Drawing a generic shape"); }
}

class Circle extends Shape {
  override draw() { console.log("Drawing a Circle ◯"); }
}

class Square extends Shape {
  override draw() { console.log("Drawing a Square □"); }
}

const shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach(s => s.draw()); // Each object knows how to draw itself!