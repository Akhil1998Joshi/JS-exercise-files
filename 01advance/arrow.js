const sayHello = (name) => `hey there ${name} !`; //literals


console.log(sayHello('raj'));

const todos =[{
    title:'Buy bread',
    isDone: true,
}, {
    title:'Go to gym',
    isDone: true,
}, {
    title:'Youtube',
    isDone: false,
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone);

const thingsNotDone = todos.filter((todo) => todo.isDone === false).forEach(todo => console.log(todo.title));

const cameras = {
    price: 600,
    weight: 2000,
    myDes: function(){
        return `This canon camera is of ${this.price} $`
    }

}

console.log(cameras.myDes());
