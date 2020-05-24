const myTodos =['Buy bread','Go to gym','Youtube'];

// console.log(myTodos[myTodos.indexOf('Buy bread')]);

const newTodos = [{
    title:'buy bread',
    isDone: false,
}, {
    title:'Go to gym',
    isDone: false,
}, {
    title:'Youtube',
    isDone: false,
}]

// const index = newTodos.findIndex(function(todo,index){

//     console.log(todo)

//     return todo.title === 'Go to gym'

// })

// console.log(index);

//Method 1
// const findTodo = function(myTodos, title){
//     const index = myTodos.findIndex(function(todo,index){
         
//         return todo.title.toLowerCase() === title.toLowerCase();
//     })
//     return myTodos[index];
// }

// let printMe = findTodo(newTodos, 'Go to gym')
// console.log(printMe);

//Method 2
const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo,index){
         
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return titleReturned;
}

let printMe = findTodo(newTodos, 'Go to gym')
console.log(printMe);
