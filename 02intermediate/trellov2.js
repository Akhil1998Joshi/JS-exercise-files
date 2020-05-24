let myTodos = {

    day:'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo , meet = 0){

    todo.meetings = todo.meetings + meet

}

let meetingDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
     todo.meetings = 0;
     todo.meetDone = 0;
}

let getSummaryofDay = function(todo){

    let meetLeft = todo.meetings + todo.meetDone; // the object is taking -5 as value so - and - becomes + to avoid this we need to do is to +
    return `You have ${meetLeft} meetings today`
}

addMeeting(myTodos, 4)
addMeeting(myTodos, 2)
meetingDone(myTodos, 5)

console.log(myTodos)
console.log(getSummaryofDay(myTodos))