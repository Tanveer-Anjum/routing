import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
useEffect(()=>{
    fetch('https://api.github.com/users/Tanveer-Anjum')
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })

},[])

 
    
    return (  
    
        <div className='h-72 w-100  text-center bg-slate-600 font-large text-white'>github Followers {data.followers}
<img src={data.avatar_url} alt="Git picture" width={250}></img>
         </div>
         
    )
}   

export default Github
