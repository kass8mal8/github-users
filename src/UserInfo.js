import React from 'react'

const UserInfo = ({ data }) => {
   
   const intro_styles={
      color:'royalblue', 
      marginTop:'0px', 
      fontSize:'13px'
   }
   return (
   <div>
     {data &&
     <div className="user-container"> 
        <section>
           <img
             src={data.avatar_url}
             width="90"/>
         </section>
         <section className="intro" >
           <aside>
              <h3> {data.name} </h3>
              
              {data.login && 
              <p style={intro_styles}>
                @{data.login}
              </p>} 
              
               {data.bio ? 
                <p>  {data.bio}  </p> :
                <p> This profile has no bio</p> 
               } 
            </aside>
            <aside>
              {data.created_at && 
                <p> Joined  {data.created_at} </p>
              } 
           </aside>
         </section>
     </div>
     } 
   </div>
   )
}

export default UserInfo
