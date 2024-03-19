import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import React, {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function C1() {
 const [mode, setMode] = useState('light');              //whether dark mode is enabled or not

 const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark');
    document.body.style.background = '#042743';
    document.title = 'TextUtils - Dark Mode';               //when we change the page and we saw the page title is also change.we can do byy this.
  }
  else{
    setMode('light');
    document.body.style.background = 'white';
    document.title = 'TextUtils - Light Mode';               //when we change the page and we saw the page title is also change.we can do byy this
  }
 }
  return (
  <>
  
   {/* <Navbar /> */}
   {/* <Navbar titile="TextUtils"/> */}

   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className="container my-3">
   

   {/* <Alert alert="This is Alert"/> */}
   <TextForm heading="Enter The Text To Analize"mode={mode}/>
   </div>

  </>
  );
}

export default C1;
