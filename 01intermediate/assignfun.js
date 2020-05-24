let getMygrade = function(currentMarks, totalMarks){

    let myPercentage = (currentMarks/totalMarks)*100;

    let myGrade = ''

    if(myPercentage >=90){
        myGrade ='A';
    }
    else if(myPercentage >=80){
        myGrade ='B';
    }
    else if(myPercentage >=70){
        myGrade ='C';
    }
    else if(myPercentage >=60){
        myGrade ='C';
    }
    else {
        myGrade = 'F'
    }

    return  `Your grade is ${myGrade} and percentage is ${myPercentage} `
}

console.log(getMygrade(92,200));