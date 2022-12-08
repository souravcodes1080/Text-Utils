import React, {useState} from 'react'
export default function TextForm(props) {
   const [text, setText]=useState('');
   let character=text.length;
   let words=text.split(' ').length;
   let timeInMinute=text.split(" ").length*0.004;
   let capital=text.split(".").length

   const handleUpClick = ()=>{
     let newText = text.toUpperCase();
     setText(newText);
   }
   const handleDownClick=()=>{
      let newText= text.toLowerCase();
      setText(newText);
   }
   const handleClearClick=()=>{
      let newText='';
      setText(newText);
   }
   const handleSpeakClick=()=>{
      let speakText = new SpeechSynthesisUtterance();
      speakText.text = text;
      window.speechSynthesis.speak(speakText);
   }
   const handleCopy=()=>{
      let text= document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
   }


   const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value);
   }
   return(
      <>
      <div className="container">
         <h1 className={`pt-5 pb-3 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
         <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
         </div>
            <button type="button" className={`btn btn-outline-info btn-outline-${props.mode==='light'?'primary':'dark'}`} onClick={handleClearClick}>Clear Text</button>
            <button className={`btn btn-outline-info  mx-3 btn-outline-${props.mode==='light'?'primary':'dark'}`} onClick={handleCopy} >Copy</button>
            <div className='container'>
               <button className={`btn btn-${props.mode==='light'?'primary':'dark'}`} onClick={handleUpClick} >Convert to Uppercase</button>
               <button className={`btn btn-${props.mode==='light'?'primary':'dark'} m-5`} onClick={handleDownClick} >Convert to Lowercase</button>
               
               <button className={`btn btn-${props.mode==='light'?'primary':'dark'}`} onClick={handleSpeakClick} >Text to Speech</button>
            </div>
      </div>
      <hr className="container"/>
      <div className='container'>
         <h1 className={`mt-3 text-${props.mode==='light'?'dark':'light'}`}>Your text summary</h1>
         <p className={`text-${props.mode==='light'?'dark':'light'}`}>
            <b>{character}</b> characters and <b>{words}</b> words and <b>{capital-1}</b> lines.
         </p>
         <p className={`text-${props.mode==='light'?'dark':'light'}`}>
            <b>{timeInMinute}</b> minute(s) required to read this document in average.
         </p>
         <h2 className={`my-5 text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
         <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
      </div>
      </>
   )
}
