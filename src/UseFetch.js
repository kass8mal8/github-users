import React, {useState} from 'react'

const [data, setData]=useStae({})

const UseFetch=async(url)=>{
   try{
     const response=await fetch(url)
     const data=await response.json()

     setData(data)
   }
   catch(error){
     console.log(error.message)
   }

   return [data]
}
export default UseFetch