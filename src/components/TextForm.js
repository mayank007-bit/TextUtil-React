import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=> {
  //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=> {
  //  console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleclrClick = ()=> {
  //  console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }

  const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event)=> {
  //  console.log("On Change");
    setText(event.target.value);
  }
    const [text, setText] = useState('');
    //text = "new text";   //worng way to change the state.
    //setText = "new text"; //correct way to change the state.
  return (
    <>
    <div>
        <h1 className='' style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <form>
  <div className="form-group">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="8"></textarea>
  </div>
</form>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-5' onClick={handleclrClick}>Clear</button>

    </div>

{/* ----------------------------------------------------------------------------------------------------------------------------------------- */}
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} Words and {text.length} Characters</p>

  <p>{0.008 * text.split(" ").length} Minutes To Read</p>

  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter Something in the Above Textbox to Preview it here..."}</p>
</div>
    </>
  )
}
