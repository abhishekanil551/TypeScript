// • With union types, we can allow a variable to take one of many types (eg number | string). 

function kgToLbs(weight:number | string):number{
    //narrowing
    if(typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg")