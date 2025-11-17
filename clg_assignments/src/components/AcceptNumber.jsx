import React, { useState } from 'react'

const AcceptNumber = () => {
    const [inputValue, setInputValue] = useState(0);
    const [state, setValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
        
    }

    const checkNumber = () => {
        if(inputValue % 2 === 0) {
            setValue("Even");
        }else {
            setValue("odd...");
        }
    }

  return (
    <div>
        <input type="number" value={inputValue} onChange={handleInput} placeholder='Enter a no. to check even or odd'/>
        <button onClick={checkNumber}>Check number</button>

        <strong>
            <br />
            {state}
        </strong>
    </div>
  )
}

export default AcceptNumber