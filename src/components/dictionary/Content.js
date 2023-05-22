import React from 'react'
import '../../stylesheets/content.css'
function Content(props) {
  
  return (
    <div>
        <fieldset className='fieldset'>
            <legend className='legend'>
                <h3>{props.pos}</h3>
            </legend>
            <p>Meaning</p>
            <ul>
            {
              props.defn.map((def,index) =>{
                return <li key={index} className="list" > → {def.definition}</li>
              })
            }
            </ul>
            <span className='syn'>{!props.synm? 'Not Found':`Synonyms:  ${props.synm}`}</span>
        </fieldset>
    </div>
  )
}
export default Content
