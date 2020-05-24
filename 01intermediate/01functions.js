let sayhello = function(name){
    console.log("Greetings!!");
    console.log(`Hey ${name}`);
}

// sayhello("joe")

let fullNameMaker = function(firstName , lastName){
    console.log("Welcome !!!");
    console.log(`Happy to have you ${firstName} ${lastName}`)

}

// fullNameMaker('Raman','Singh');

let myAdder = function(num1,num2){
   let adder = num1+num2
   return adder;
}

// console.log(myAdder(2,3));

let multiply = function(num1,num2){
    return num1*num2
}

let guestUser = function(name ='unName', courseCount = 0){
    return 'Hello ' + name + 'and your course count is: ' + courseCount
}

console.log(guestUser('joe',5))
