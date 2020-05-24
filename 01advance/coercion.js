console.log('5' + 5); //concatination

// const giveType = typeof '5'

// console.log(giveType);

// const adder = true + 5 //true is consider as 1

// console.log(adder);

// const f = 5 + false

// console.log(f);

const loginDetails = ''
//logic for getting details from DB

const loginID = loginDetails[0]

if(loginDetails){
    console.log('Allow user to login')
}
else
{
    console.log('Auth failed')
}

//Values that interpret as false
// false
// 0
// ''
// null
// undefined