import React from 'react'
const UserInfo=({data} )=>{
  return(
    <div className="user-container">
     {data &&
     <> <section>
        <img
          src={data.avatar_url}
          width="100"/>
      </section>
      <section>
       {data.name &&<p>Name: {data.name}</p>} 
       <p>{data.location} </p>
       <p>{data.bio} </p>
      </section></>} 
    </div>
  )
}

export default UserInfo