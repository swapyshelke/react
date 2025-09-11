import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CardsData from "./CardsData"

const Cards = () => {

    const [data, setData] = useState(CardsData);
    console.log(data);
     
  return (
    <div>
        <div className="container mt-3">
            <h2 className="text-center">Add to Card Items...</h2>

            <div className="row">
                {
                    data.map((element, id) =>{
                        return (
                            <>
                             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.imgdata} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                            </>
                        )
                    })
                }
                 {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.imgData} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
            </div>
        </div>
    </div>
  )
}

export default Cards