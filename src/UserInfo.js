import React from 'react'
const UserInfo=({data} )=>{
  return(
    <div className="user-container">
      <section>
        <img
          src={data.avatar_url}
          width="100"/>
      </section>
      <section>
       <p> {data.name}</p>
       <p>{data.location} </p>
      </section>
    </div>
  )
}

export default UserInfo