import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //    fetch("https://api.github.com/users/kami123kaze")
  //    .then(response => response.json())
  //    .then(data=>{
  //      setData(data)
  //    })
  // },[])
  return (
    <div className='text-center m-4 bg-green-400 text-fuchsia-100 text-3xl p-4 flex justify-between items-center '>
      <div>
      <img src={data.avatar_url}/>
       

      </div>
        <div className="">
        Github Followers :  {data.followers + 142}
        </div>
    </div>
    
  ) 
}

export default Github

export const gitHubInfoLoader  = async () =>{
const response = await fetch('https://api.github.com/users/kami123kaze')
return response.json()
}