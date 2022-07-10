import React,{useState, useEffect, useRef } from 'react'
import UserInfo from './UserInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' 


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
      <header>
        <input type="text" placeholder="search github username... " ref={nameRef} />
    
          <FontAwesomeIcon 
             icon={faSearch}    
             className="search-btn"/>
             <button onClick ={handleSearch}>search</button>
    </header>
    
     <UserInfo data={data} />
    </div>
  )
}

export default Home