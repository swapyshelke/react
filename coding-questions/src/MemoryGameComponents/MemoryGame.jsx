
import React, { useState } from 'react'

const MemoryGame = () => {

  // state for gridSize
  const [gridSize, setGridSize] = useState([])
  // state for cards
  const [cards, setCards] = useState([])
  // state for flipped
  const [flipped, setflipped] = useState(false)
  // state for solved
  const [solved, setSolved] = useState([])
  // state for disable
  const [disable, setDisable] = useState(false)
  // state for won
  const [won, setWon] = useState(0)

  const handleGridSizeChange = () => {

  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4'>

            <h1 className='text-3xl font-bold mb-6 '>Memory Game</h1>

      {/* input */}
      <label htmlFor="">Max Size (10)</label>
        <input type="number" id='gridSize' min="2" max="10" value={gridSize} onChange={handleGridSizeChange}
        className={`border-2 border-black rounded px-2 py-1`}
        />
    </div>
  )
}

export default MemoryGame