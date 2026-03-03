// TS build in types:-

// *any:-

let ex;
console.log(typeof ex); //any type is undifined
ex=2;
console.log(typeof ex);
console.log(ex);

function render(document: any){
    console.log(document) ;
}
render(2);


//*enum:-

// const small = 1;
// const medium = 2;
// const larget =3;

const enum Size {small = 1 , medium = 2 , large =3}
let mySize :Size = Size.medium;
console.log(mySize);


//*Tuples:-

let user:[number, string] = [1 , "add"];
user.push(1);
console.log(user[0])