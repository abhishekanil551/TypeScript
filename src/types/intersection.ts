// • With intersection types, we can combine multiple types into one (eg Draggable & Resizable).

// let weight : number & string; this i an example but its bulshit because of its not possible number and sting in one value 

type Draggable = {
    drag:() => void
};

type Resizeable = {
    resize : () => void
};

type UIWidget = Draggable & Resizeable;

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
}

console.log(textBox)