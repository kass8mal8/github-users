import React from 'react'
const UserInfo = ({ data }) => {
   return (
   <div>
     {data &&
     <div className="user-container"> 
        <section>
           <img
             src={data.avatar_url}
             width="100"/>
         </section>
         <section className="intro" >
           <h3> {data.name} </h3>
           <p>  {data.location} </p>
           
            {data.bio == null ? 
               <p> This profile has no bio</p> 
            :  <p>  {data.bio}  </p> } 
           {data.created_at && 
             <p> Joined on {data.created_at} </p>
           } 
         </section>
     </div>
     } 
   </div>
   )
}

export default UserInfo