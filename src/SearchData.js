import React, {useState, useEffect} from 'react'

const SearchData =()=>{
  const url="https://shoppingapiacme.herokuapp.com/shopping "
  const [data, setData]=useState([])

  useEffect(()=>{
    const getData=async()=>{
      try{
        const res=await fetch(url)
        const data=await res.json()

        setData(data)
        console.log(data)
      }
      catch(e){
        console.log(e.message)
      }
    }
    getData()
  },[url])
  return(
    <div>
      <p>Fetching data from api</p>
      {data.map(product=>(
        <div>
         <p> {product.brand}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchData