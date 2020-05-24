// alert('connected');

function myValidate(){
    let myValue = document.getElementById('myform').value;
    
    if(isNaN(myValue) || myValue < 1 || myValue >20){
        document.querySelector('#idone').textContent = "this is invalid";

    } else {
        document.querySelector('#idone').textContent = "this is valid";
    }
}

//form validation

document.querySelector('.myforms').addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event.target.userName.value);
    console.log(event.target.realName.value);
    event.target.userName.value = '';
    event.target.realName.value = '';

})