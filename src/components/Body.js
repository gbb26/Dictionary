import React from 'react'
import '../stylesheets/body.css'
function Body(props) {
  return (
    <div>
      <h1 className='word'>{props.word?props.word:""}</h1>
      <h3 className='phonetic' >{props.ph?props.ph:""}</h3>
    </div>
  )
}

export default Body
