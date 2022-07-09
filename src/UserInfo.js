import React from 'react'
const UserInfo=({data} )=>{
  return(
    <div>
      <section>
        <img
          src={data.avatar_url}/>
      </section>
      <p> {data.name}</p>
    </div>
  )
}

export default UserInfo