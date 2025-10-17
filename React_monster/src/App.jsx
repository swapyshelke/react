import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  // console.log("hi");

  // const count = useRef(0);
  // console.log(count);

  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // });

  return <>

    <button onClick={() => setValue(prev => prev - 1)}>-1</button>

    <h1>{value}</h1>

    <button onClick={() => setValue(prev => prev + 1)}>+1</button>

    <h1>Render count : {count}</h1>

  </>;
}

export default App;
