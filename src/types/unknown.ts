// • The unknown type is the type-safe version of any. 
//   Similar to any, it can represent any value but we cannot perform any operations on an unknown type without rst narrowing to a more speci c type.

function render(document : unknown){
    //Narrowing
    if(typeof document === "string"){
        document.toUpperCase();
    }
}
render('d');