import React, { useState } from 'react'

const Form = () => {
  const [inputValue, setInputValue] = useState(0);


    const eventHandler = (e) => {
            // setInputValue(e.target.value);            
            const num = e.target.value;
            const revNum = num.split('').reverse().join('')
            // console.log(revNum);
            if(num == revNum) {
              console.log("number is palindrome");
            }else {
              console.log("no is not ");
              
            }
            
            
    }
  return (
    <div>
        <form action="">
            <input onChange={eventHandler} type={inputValue} placeholder='Enter a number' />
        </form>

        <h1>Your entered value is : {inputValue}</h1>
    </div>
  )
}

export default Form