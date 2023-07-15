
import { useEffect, useState } from 'react';
import Products from './Products'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Testproduct from './Testproduct';


const Category = () => {
const id =useParams();
const [data, setData]=useState([]);
useEffect(()=>{
axios.get(`http://localhost:8080/product/Product`)
.then(res=>{
console.log(res.data)
setData(res.data);
}).catch(error=>{
  console.log(error)
})
},[])

console.log(id);

  return (
   <>
   category
   <Testproduct data={data}/>
  
   {/* <Products/> */}
   
   </>
  )
}

export default Category