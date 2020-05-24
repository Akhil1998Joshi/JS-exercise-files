// const days = ['Mon', 'Tue','Wed','Thur','Fri','Sat']

 

//  days.forEach(function(day, index){
//     console.log(`Starts with ${index+1} == ${day}`);
// })

// for (let index = 0; index < days.length; index++) {
//     console.log(days[index]);
    
// }

// for (let index = days.length -1; index >=0 ; index--) {
//     console.log(days[index]);
    
// }

//Todo 

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record a lesson')
myTodos.push('Q and A session')

myTodos.forEach(function(todo,index){

    console.log(`Your Task no ${index+1} is: ${todo}`);

})