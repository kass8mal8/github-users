import React from 'react'
const UserInfo = ({ data }) => {
   return (
      <div>
     {data ?
     <div className="user-container"> 
     <section>
        <img
          src={data.avatar_url}
          width="100"/>
      </section>
      <section className="intro" >
        <p>{data.name}
        <br/>
         {data.location} 
         {data.bio} 
        </p>
        <p>
         {data.created_at}
        </p>
      </section>
      </div> : ""} 
    </div>
   )
}

export default UserInfo
