import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Single from './Single'
import './Source.css'
import { createContext } from 'react'
import Nav from './Nav'
export const context = createContext()
function Source() {
   

    const [data,setData]=useState([])
    const[category,setCategory]=useState("general")
    const [lang,setLang]=useState("en")
    const [q,setQ]=useState("")
 
    
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?q=${q}&apiKey=c396b32c4b204c8bbc9916953e905c08&language=${lang}&category=${category}&pageSize=100`)
        .then((res)=>{
            console.log(res.data.articles)
            setData(res.data.articles)
         
           
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[category,lang,q])
    

  return (
    <>
     <context.Provider value={{setCategory,setLang,setQ}}>
        <Nav/>
    </context.Provider>
    <div className='source'>
    {
        data.map((a,b)=>
         {   return (
            <a href={a.url} target="_self">     <Single  key={b} title={a.title} image={a.urlToImage} /></a>


            )}
        )
    }
    </div>
   
    </>
  )
}

export default Source