let myYoutubeVideo1 = {

    title: 'Loops in js' ,
    videoLength: 15,
    videoCreator: 'Akhil',
    videoDescription: 'this video is long one'

}

let myYoutubeVideo2 = {

    title: 'function in js' ,
    videoLength: 10,
    videoCreator: 'Akhil',
    videoDescription: 'this video is long one'

}

// console.log(myYoutubeVideo)

// console.log(`Hey new video on title by ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

//Assignment 

// let myCourse = {

//     courseName:'Javascript for web developers',
//     courseCreator: 'Hitesh Chaudhary',
//     coursePrice:'Rs. 200',
//     courseDescription:'this course is about javascript'

// }

// console.log(`Hey there is a new course : ${myCourse.courseName} by ${myCourse.courseCreator} at a price ${myCourse.coursePrice}. Description : ${myCourse.courseDescription}`);

let changeVideoLength = function(myObj){

    // return `Time of this video is: ${myObj.videoLength + 2}`;

    return {

        formatOne : `Time of this video is: ${myObj.videoLength + 2}`,
        formatTwo : `Time of this video is: ${myObj.videoLength + 1}`
    }

}

let addOne = changeVideoLength(myYoutubeVideo2)
console.log(addOne.formatTwo);

