import React,{useEffect, useState} from 'react'
import './Heading.css'
import axios from 'axios'

function Heading () {
  const[lat,setLat]=useState()
  const[long,setLong]=useState()
  const [data,setData]=useState({location:"",current:""})
  const successCallback = (position) => {
    console.log(position)
    setLat(position.coords.latitude)
    setLong(position.coords.longitude)
    
}
useEffect(()=>{
  navigator.geolocation.getCurrentPosition(successCallback);
},[])
 useEffect(()=>{

  axios.get(`http://api.weatherapi.com/v1/current.json?key=7c908e0d512c4f7188f181643232803&q=${lat},${long}`)
  .then((res)=>{
    console.log(res.data)
    setData(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })

 },[lat,long])
   
   
 return (
    <div className='head'><h1>
        AAJ KAL KI KHABAR  </h1>
        <span className='info'>{data.location.name} , {data.current.temp_c}&#176;c</span>
      
        </div>
  )
}

export default Heading 