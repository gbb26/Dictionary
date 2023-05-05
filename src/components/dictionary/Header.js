import React, { useState } from 'react'
import { BiBook } from 'react-icons/bi';
import '../../stylesheets/header.css';
import Body from './Body';
import Content from './Content';
var Meanings = [];
function Header() {

    const [word,setWord] = useState('')
    const[font,setFont] = useState('serif')
    const [content,setContent] = useState({
      word: '',
      phonetic: "",
      audio:''
    })
    const handleSubmit = (event) =>{
        event.preventDefault();
        Meanings = []
        getData();
    }
    const getData = async () =>{
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      const mainData = await data.json();
      setContent({
        word : mainData[0].word,
        phonetic : mainData[0].phonetic,
        audio: mainData[0].phonetics[0].audio
      });
      Meanings.push(...mainData[0].meanings)
    }


    function handleChange(event)
    {
      setFont(event.target.value)
    }
  return (
    <>
    <div
    style={{
      fontFamily : font
    }}
    >
      <nav className='navbar'>
        <span className='logo' size="2em"><BiBook/></span>
        <span className='font'>
            <form className='form'>
                <select
                className='select' 
                onChange={handleChange}
                >
                    <option className='option'>serif</option>
                    <option className='option'>sans-serif</option>
                    <option className='option'>monospace</option>
                    <option className='option'>cursive</option>
                    <option className='option'>fantasy</option>
                </select>
            </form>
        </span>
      </nav>
      <form className='search' onSubmit={handleSubmit} >
        <center><input type='text'
        style={{fontFamily: font}}
        className='input' value={word} placeholder="Search..."
        onChange={(event) =>{
          setWord(event.target.value)
        }}
        /></center>
      </form>
      <Body word={content.word} ph={content.phonetic} link={content.audio}  />
      <ul>      
        {Meanings.map((mean,index) => {
    return (
      <li key={index}>
        <Content pos={mean.partOfSpeech}
        synm = {mean.synonyms}
        defn = {mean.definitions}
        />
      </li>
    )
  })}
      <hr/>
  </ul>
    </div>
    </>
  )
}

export default Header
