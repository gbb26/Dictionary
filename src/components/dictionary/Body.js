import React from 'react'
import '../../stylesheets/body.css'
import Audio from './Audio'
function Body(props) {
  return (
    <>
      <span className='word'>{props.word?props.word:""}</span>
      <br/>
      <br/>
      <span className='phonetic' >{props.ph?props.ph:""}</span>
    <div className='audio'>
      <Audio link={props.link} />
    </div>
    </>
  )
}

export default Body
