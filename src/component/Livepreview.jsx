import React, { useState } from 'react'

const Livepreview = () => {
    const [text , settext] = useState("") ;
  return (
    <div className='border-1 text-center'>
      <input className = "border-1 bg-gray-200" type="text" 
      onChange={(e)=>settext(e.target.value)}
      />
      <div>
      {text}
      </div>
    </div>
  )
}

export default Livepreview
