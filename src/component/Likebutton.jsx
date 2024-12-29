import React, { useState } from 'react'

const Likebutton = () => {
    const [text , settext] = useState("Like") ;
    const [likecount , setlikecount ] = useState(0) ;
    function handlelike(){
        if(text == "Like")
        {
            settext("Unlike") ;
            setlikecount(likecount+1) ;
        }
        else 
        {
            settext("Like") ;
        }
    }
  return (
    <div className='text-center'>
      <div className='font-bold'>
      {likecount}
      </div>
      <button onClick={handlelike}>{text}</button>
    </div>
  )
}

export default Likebutton
