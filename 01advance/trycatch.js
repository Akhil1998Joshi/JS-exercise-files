const convertToRs = (dollar) => {
   if(typeof dollar === 'number') 
   {
    return dollar * 64
   }else
   {
       return Error('Amount need to be in number')
   }

}

// const myValue = convertToRs('five')
// console.log(myValue);

try {
    const myValue = convertToRs('five')
    console.log(myValue)
    
} catch (error) {
    console.log(error);
    
}

console.log('I will not run if program crashes')

