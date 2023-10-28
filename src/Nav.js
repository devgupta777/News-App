import React from 'react'
import './Nav.css'
import { useContext,useState } from 'react'
import {context} from './Source'

function Nav() {
  const func=useContext(context)
  const [qu,setQu]=useState("")
  var d=0
   
    const gen=(a)=>{
      setQu("")
      func.setQ(qu)
      func.setCategory(a)
   
    }
    const lang=(b)=>{
func.setLang(b)
    }
const Qsetter=(()=>{
  func.setCategory("general")
  func.setQ(qu)


})

const darkmode=()=>{
  const color=(d===0)?"black":"white"
  const color2=(d===1)?"black":"grey"
  document.getElementsByTagName("body")[0].style.background=color
  d=(d===0)?1:0


}

  return (
    <>
    <div className='nav'>
        <ul className='list'>
            <li onClick={()=>gen("general")}>General</li>
            <li onClick={()=>gen("entertainment")}>Entertainment</li>
            <li onClick={()=>gen("health")}>Health</li>
            <li onClick={()=>gen("business")}>Business</li>
            <li onClick={()=>gen("science")}>Science</li>
            <li onClick={()=>gen("sports")}>Sports</li>
            <li onClick={()=>gen("technology")}>Technology</li>
            
        </ul>
        <div className='lang'>
          <button>Language</button>
       <ul className='language'>
        <li onClick={()=>lang("ar")}>Arabic</li>
        <li onClick={()=>lang("de")}>German</li>
        <li onClick={()=>lang("en")}>English</li>
        <li onClick={()=>lang("es")}>Spanish</li>
        <li onClick={()=>lang("fr")}>French</li>
        <li onClick={()=>lang("it")}>Italian</li>
        <li onClick={()=>lang("nl")}>Dutch</li>
        <li onClick={()=>lang("zh")}>Chinese</li>
        <li onClick={()=>lang("pt")}>Portuguese</li>
        <li onClick={()=>lang("ru")}>Russian</li>
       </ul>
     
       </div>
       <input type='text' placeholder='search'  onChange={(e)=>setQu(e.target.value)}></input>
       <button onClick={Qsetter}>Search</button>
       <button onClick={darkmode}>{(d===0)?"dark mode" :"light mode"}</button>
    </div>
    </>
  )
}

export default Nav