let myTodos = {

    day:'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num = 0){ 
        this.meetings = this.meetings + num
        
    },

    meetingDone: function(meet = 0){
        this.meetDone = this.meetDone - meet

    },

    resetDay : function(){
        this.meetings = 0;
        this.meetDone = 0;
    },

    summary: function(){
        let meetLeft = this.meetings + this.meetDone;
        return `You have ${meetLeft} meetings today! `;

    }
}

myTodos.addMeeting(4);
myTodos.meetingDone(2);
console.log(myTodos.summary());


// let myTodos2 = {

//     day:'Tuesday',
//     meetings: 12,
//     meetDone: 3,

//     addMeeting: function(){
//         console.log(this)
//     }
// }


// myTodos2.addMeeting();

//Assignment
//Handle meeting done
//Create a function 