import React from 'react'
import Table from 'react-bootstrap/Table';


const CardsDetails = () => {
  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Items added to cart</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
              <div className="items_img">
                <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
              </div>

              <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>Restaurent: Kerala Cafe</p>
                        <p>Price: 200 $</p>
                        <p>Dishes: South india, kerala</p>
                        <p>Total: 1000</p>
                      </td>

                      <td>
                        <p> <strong>Rating</strong>
                          <span style={{background:"green", color:"#fff", padding:"2px 5px", borderRadius:"5px"}}>3.5 ⭐</span>
                        </p>
                        <p> <strong>Order Review</strong>
                          <span>1101+ orders placed in one day</span>
                        </p>
                        <p> <strong>Rating</strong>
                          <span > : 
                            <i className='fas fa-trash' style={{color:"red", fontSize:"20", cursor:"pointer"}}></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
              </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default CardsDetails