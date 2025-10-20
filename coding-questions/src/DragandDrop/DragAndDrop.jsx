import React, { useReducer, useRef, useState } from 'react'

const DragAndDrop = ({initialState}) => {
           
    const [data, newData] = useState(initialState)
    const dragItem = useRef();
    const dragContainer = useRef();


    const handleDragStart= (e, item, container) => {
        dragItem.current = item;
        dragContainer.current = container;
        e.target.style.opacity = "0.3"
    }

    const handleDragEnd= (e) => {
            e.target.style.opacity = "1"
    }

    const handleDrop = (e, targetContainer) => {
        const item = dragItem.current;
        const sourceContainer = dragContainer.current;
        setData(prev => {
            const newData = {...prev};
            newData[sourceContainer] = newData[sourceContainer].filter(i => i !== item);
            newData[targetContainer] = [...newData[targetContainer], item]
            return newData;
        })
    }

    const handleDragOVer= (e) => {
        e.preventDefault();
    }

  return (
    <div style={{
        display:" flex"
    }}>
        {
            Object.keys(data).map((container, index) => {
                return <div key={index}
                onDrop={() => handleDrop(e, container)}
                onDragOver={handleDragOVer}
                style = {{
                    background: "#f0f0f0",
                    padding:"1rem",
                    width: 250,
                    minHeight: 300
                }}
                >
                    <h2>{container}</h2>

                    {
                        data[container].map((item, index) => {
                            return <div key={index}
                            draggable
                            onDragStart={(e) => handleDragStart(e, item, container)}
                            onDragEnd={handleDragEnd}
                            style={{
                                userSelect:"none",
                                padding:16,
                                margin: "0 0 8px 0",
                                backgroundColor: "white",
                                cursor: "move"
                            }}
                            
                            >
                                {item}
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
  )
}

export default DragAndDrop