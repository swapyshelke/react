import { useState } from 'react'
import './App.css'
import DragAndDrop from './DragandDrop/DragAndDrop'
import MemoryGame from './MemoryGameComponents/MemoryGame'
import Model from './ModelComponents/Model'
import PhoneOTPform from './OTPcomponents/PhoneComponent'


function App() {

  // this object for drag and drop 

  const initialData = {
    Todo: [
      "Design UI mockups",
      "Set up project repository",
      "Write unit tests",
      "Integrate payment gateway"
    ],
    "In progress": ["develop authentic flow", "Implement react app"],
    Completed: [
      "Set up ci/cd pipeline",
      "Conduct code reviews",
      "Develop initial version to staging"
    ]
  }

  const [showModel, setShoeModel] = useState(false)


  return (
   <>

   {/* otp component data */}
   
   {/* <div className="app">
    <h1>Login with Phone</h1>
    <PhoneOTPform/>
   </div> */}

   {/* memory game comopnents */}
   {/* <MemoryGame /> */}

   {/* drag and drop functionality */}
   {/* <DragAndDrop initialState={initialData} /> */}

   {/* Model component */}
   <Model isOpen={showModel}  closeModel={() => {
    setShoeModel(false)
   }}/>


   </>
  )
}

export default App

// 5:00 - model 
