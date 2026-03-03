// • Using optional chaining (?.) we can simplify our code and remove the need for null checks. 

type Customer = {
    birthday:Date
};

function getCustomer(id:number):Customer|null{
    return id == 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(10);
console.log(customer?.birthday?.getFullYear())