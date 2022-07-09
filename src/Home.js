import React,{useState, useEffect } from 'react'


const Home=()=>{
  const [username, setName] =useState('')

  const getUser =async(username)=>{
    const url=`https://api.github.com/users/${username}`
     useEffect(async()=>{
        try{         
          const res=await fetch(url)
          const data=await res.json()
          console.log(data)
        }
        catch(error){
          console.log(error.message)
        }
     },[username])
     getUser ()
  }
  return(
    <div className="container">
      <input type="text" placeholder="enter username to search" onChange={(e)=>setName(e.target.value)} />
    </div>
  )
}

export default Home