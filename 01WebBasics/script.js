// console.log(document.getElementById("idone"));
// console.log(document.getElementsByClassName('classone'));

// const myElement = document.querySelectorAll('.classone');
// console.log(myElement[0])

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'I am being changed using js'

const myPElement = document.querySelectorAll('p')

// myPElement.forEach(function(p){
//     // p.textContent = "I am changed using js"
//     // p.remove()
// })

// myPElement.forEach((p) => p.textContent = "I am changed using js")

const myNewPara = document.createElement('p')

myNewPara.textContent = 'I was added via js'

document.querySelector('body').appendChild(myNewPara);

document.querySelector('button').addEventListener('click',(event) => {
    event.target.textContent = "i was clicked"
})

//track input form

document.querySelector('#myform').addEventListener('input', (event) =>{
    console.log(event.target.value);
})