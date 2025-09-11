import React, { useState } from 'react'

const Five = () => {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1)
    }

    const handleDecrement = () => {
        setValue(value - 1)
    }

  return (
    <div>
        <h1>Counter</h1>

        <button onClick={handleIncrement}>Increment</button>
        {value}
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Five