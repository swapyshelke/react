import { useEffect, useState } from 'react'
import './App.css'
import DragAndDrop from './DragandDrop/DragAndDrop'
import MemoryGame from './MemoryGameComponents/MemoryGame'
import Model from './ModelComponents/Model'
import PhoneOTPform from './OTPcomponents/PhoneComponent'
// import TabsComponent from './TabsComponent/TabsComponent'
import TabForm from './TabsComponent/TabForm'



// product cart - pagination
const ProductCart = ({image, title}) => {
  return <div className='product-card'>
    <img src={image} alt={title} className='product-img' />
    <span>{title}</span>
  </div>
}


function App() {

  // this object for drag and drop 

  // const initialData = {
  //   Todo: [
  //     "Design UI mockups",
  //     "Set up project repository",
  //     "Write unit tests",
  //     "Integrate payment gateway"
  //   ],
  //   "In progress": ["develop authentic flow", "Implement react app"],
  //   Completed: [
  //     "Set up ci/cd pipeline",
  //     "Conduct code reviews",
  //     "Develop initial version to staging"
  //   ]
  // }

  // const [showModel, setShoeModel] = useState(false)


  // pagination - code

  const PAGE_SIZE = 10;

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const json = await data.json();
    setProducts(json.products);            
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(products);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  


  return  !products.length ? (<h1>No products found </h1>) : (
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

   {/* <Model isOpen={showModel}  closeModel={() => {
    setShoeModel(false)
   }}/> */}


   {/* tabs question */}

   {/*  show tab list and component based on selected tab  */}
   {/* check edge cases of optimisation - open ended */}

   {/* <TabForm /> */}


   {/* Pagination */}

<h2>Pagination</h2>

<div>
  {
  [...Array(10).keys()].map(n => <span className='page_no'>{n}</span>)
}
</div>

<div className='product-container'>
  {
  products.map((product, index) => (
    // return <div key={index}>{product.title}</div>
    <ProductCart key={product.index} title={product.title} image={product.thumbnail} />

  ))
}
</div>

   </>
  )
}

export default App

// 5:00 - model 
