// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React, { useState } from 'react';


function App() {
  
  const [mode, setMode] = useState("light")  // whether dark mode is enable or not 
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils | Dark Mode";
      // let a =document.body.style.backgroundColor = '#042743';
      // window.localStorage.setItem("mode", a);
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils | Light Mode"
      // let a = document.body.style.backgroundColor = 'white';
      // window.localStorage.setItem("mode",a);
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils"  aboutText="AboutTextUtils" Contact="Contact Us" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
       <About/> 
      
    </>
  );
}

export default App;
