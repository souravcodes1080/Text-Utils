import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import TextBox from "./components/TextBox";
import About from "./components/About";
function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#121212";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" homeTab="Home" toggleMode={toggleMode} mode={mode}/>

        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextBox heading="Enter your text below :-" mode={mode}/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
