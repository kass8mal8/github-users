import React,{useState, useEffect, useRef } from 'react'


const Home=()=>{
  const [username, setName] =useState('')
  const [data, setData]=useState([])

  const getUser =async(username)=>{
    const url=`https://api.github.com/users/${username}`
        try{         
          const res=await fetch(url)
          const data=await res.json()
          console.log(data)
          setData(data)
        }
        catch(error){
          console.log(error.message)
        }
  } 
    useEffect(()=>{
        getUser (username)
     },[username])
  
  const nameRef=useRef()
  const handleSearch =() =>{
    setName(nameRef.current.value)
  } 
  return(
    <div className="container">
      <form onSubmit={handleSearch }>
        <input type="text" placeholder="enter username to search" ref={nameRef} />
        <button>search</button>
     </form>
      
    </div>
  )
}

export default Home