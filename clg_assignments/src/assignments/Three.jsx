import React, { useState } from 'react'

const Three = () => {

    const [num, setNum] = useState(0);

    const incrementNum= () => {
        setNum(num + 1);
    }

    const decrementNum = () => {
        setNum(num -1);
    }

  return (
    <div>
        <h1>Counter</h1>

        <button onClick={incrementNum}>Increment</button>
        {num}
        <button onClick={decrementNum}>Decrement</button>
    </div>
  )
}

export default Three