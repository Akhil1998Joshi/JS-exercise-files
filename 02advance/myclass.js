class User {

    constructor(firstName, lastName , credits){
        this.firstName = firstName;
        this.lastName = lastName;
        this.credits = credits;

    }


    getFullName (){
        // let fullName = `${this.firstName} ${this.lastName} is my full name`
        // return fullName

        return `${this.firstName} ${this.lastName} is my full name`
     
    }

    editName(newname){
        const myname = newname.split(' ');
        this.firstName = myname[0];
        this.lastName = myname[1];
    }

}

class Teacher extends User {
     constructor(firstName, lastName , credits, subject){
         super(firstName, lastName , credits);
         this.subject = subject;
     }

     getFullName(){

        return `${this.firstName} ${this.lastName} is my full name and I teach ${this.subject}` ;
     
    }
}

const john = new Teacher('John', 'Anderson', 34, 'js');
console.log(john);
// const sammy = new User();
// console.log(sammy);

console.log(john.getFullName());

john.editName('Johnny Anderson');

console.log(john.getFullName());