import React from 'react'
import './Single.css'

function Single({id,title,image}) {
    const a="https://images.unsplash.com/photo-1536427824649-fbf2e4a33d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    
  return (
    <div className='single'>

<img  className='i' src={(image==null)?a:image} alt="hi" />
<h3 className='h'>{title}</h3>
    </div>
  )
}

export default Single
