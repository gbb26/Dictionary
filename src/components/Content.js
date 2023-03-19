import React from 'react'
import '../stylesheets/content.css'
function Content(props) {
  // console.log(props.defn)
  return (
    <div>
        <fieldset className='fieldset'>
            <legend className='legend'>
                <h3>{props.pos}</h3>
            </legend>
            <p>Meaning</p>
            {
              props.defn.map(def =>{
                return <li key={def.id} className="list" > → {def.definition}</li>
              })
            }
            <span className='syn'>{!props.synm? 'Not Found':`Synonyms:  ${props.synm}`}</span>
        </fieldset>
    </div>
  )
}
export default Content
