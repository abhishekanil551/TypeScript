class Person {
    constructor( public firstName: string, public lastName: string) {}

    get fullName(){
        return this.firstName +' ' + this.lastName;
    }

    walk() {
        console.log('walking');
    }
}



// Inheritance 

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName:string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log('taking a test ')
    }
}

let student = new Student(1, "abhi" , "hh");
console.log(student.firstName)




class Teacher extends Person {

    // override
   override get fullName(){
        return "Professer" + " "+super.fullName;
    }
}

let teacher = new Teacher("john" , "smith" );
console.log(teacher.fullName);