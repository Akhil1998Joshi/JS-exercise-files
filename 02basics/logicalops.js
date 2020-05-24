// && AND - Both should be true
// || OR - One of them should be true

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if(isVerified && isLoggedIn && hasPaymentToken)
{
    console.log('Greeting message to user')
    console.log('Grant access to paid course')

}
else if(isVerified || isGuest)
{
    console('Preview all free course')
}
else
{
    console.log('Please contact admin')
}