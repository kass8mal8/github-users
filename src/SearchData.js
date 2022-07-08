import React from 'react'
import UseFetch from './UseFetch'

const SearchData =()=>{
  const url="https://api.github.com/users/"
  const [data]=UseFetch(url)

  return(
    <div>
      
    </div>
  )
}